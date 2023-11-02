import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "./CategoryDragAndDrop.css";
import { useDispatch } from "react-redux";
import { CategoryDragAndDropData } from "../../store/userSlice";
import ComponentHeader from "../ComponentHeader/ComponentHeader";

const initialItems = [
  { id: "1", content: "Ans1" },
  { id: "2", content: "Ans2" },
];

const initialBoxes = [
  { id: "Answer1", item: null },
  { id: "Answer2", item: null },
];

const CategoryDragAndDrop = () => {
  const dispatch = useDispatch();

  const [items, setItems] = useState(initialItems);
  const [boxes, setBoxes] = useState(initialBoxes);
  const [categoryAnswers, setCategoryAnswers] = useState({});

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const itemId = result.draggableId;
    const boxId = result.destination.droppableId;

    const draggedItem = items.find((item) => item.id === itemId);

    const updatedBoxes = boxes.map((box) =>
      box.id === boxId ? { ...box, item: draggedItem } : box
    );
    setBoxes(updatedBoxes);

    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);

    setCategoryAnswers((prevAnswers) => ({
      ...prevAnswers,
      [boxId]: `Cat${boxId.charAt(boxId.length - 1)} Answer is ${
        draggedItem.content
      }`,
    }));
  };
  dispatch(CategoryDragAndDropData(categoryAnswers));

  const handleReset = () => {
    console.log("ghvg");
    setItems(initialItems);
    setBoxes(initialBoxes);
    setCategoryAnswers({});
  };

  return (
    <div className="categoryMainDiv">
      <ComponentHeader
        CategoryDragAndDropReset={handleReset}
        questionNumber={1}
      />
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="drag-drop-container">
          <Droppable droppableId="items" direction="horizontal">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="items-container"
              >
                {items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        className={`draggable-item ${
                          item.color ||
                          (item.content === "Ans1" ? "ans1" : "ans2")
                        }`}
                      >
                        {item.content}
                      </div>
                    )}
                  </Draggable>
                ))}

                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <div className="CategoryDiv">
            <p className="faceColor cat">Cat1</p>
            <p className="yellowColor cat">Cat2</p>
          </div>
          <div className="boxes-container">
            {boxes.map((box) => (
              <Droppable key={box.id} droppableId={box.id}>
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={`droppable-box ${
                      box.id === "Answer1" ? "faceColor" : "yellowColor"
                    }`}
                  >
                    {box.item ? (
                      <div
                        className={`draggable-item ${
                          box.id === "Answer1" ? "faceColor" : "yellowColor"
                        }`}
                      >
                        {box.item.content}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                )}
              </Droppable>
            ))}
          </div>
        </div>
      </DragDropContext>
    </div>
  );
};

export default CategoryDragAndDrop;
