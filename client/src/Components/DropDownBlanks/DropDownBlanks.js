import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "./DropDownBlanks.css";
import { useDispatch } from "react-redux";
import { DropDownBlanksData } from "../../store/userSlice";
import ComponentHeader from "../ComponentHeader/ComponentHeader";

const initialItems = [
  { id: "item1", content: "Fence" },
  { id: "item2", content: "Brown" },
];

const initialBoxes = [
  { id: "box1", item: null },
  { id: "box2", item: null },
];

const DropDownBlanks = () => {
  const dispatch = useDispatch();

  const [items, setItems] = useState(initialItems);
  const [boxes, setBoxes] = useState(initialBoxes);
  const [completedSentence, setCompletedSentence] = useState("");

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const {
      draggableId: itemId,
      destination: { droppableId: boxId },
    } = result;

    const draggedItem = items.find((item) => item.id === itemId);

    const updatedBoxes = boxes.map((box) =>
      box.id === boxId ? { ...box, item: draggedItem } : box
    );
    setBoxes(updatedBoxes);

    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);

    const newCompletedSentence =
      "A Quick " +
      updatedBoxes
        .map((box) => (box.item ? box.item.content : "[result]"))
        .join(" for jumped over a ");
    setCompletedSentence(newCompletedSentence);
  };

  const handleReset = () => {
    setItems(initialItems);
    setBoxes(initialBoxes);
    setCompletedSentence("");
  };

  const renderDroppableBox = (box) => (
    <Droppable key={box.id} droppableId={box.id}>
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="dropBoxDiv"
        >
          {box.item ? <div className="dropBox">{box.item.content}</div> : ""}
        </div>
      )}
    </Droppable>
  );

  dispatch(DropDownBlanksData(completedSentence));

  return (
    <div className="categoryMainDiv">
      <ComponentHeader DropDownBlanksReset={handleReset} questionNumber={2} />

      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="drag-drop-containerr">
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
                        className="draggable-item"
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
          <div className="boxes-container">
            <div className="text-box">A Quick</div>
            {renderDroppableBox(boxes[0])}
            <div className="text-box">For Jumped Over A</div>
            {renderDroppableBox(boxes[1])}
          </div>
        </div>
      </DragDropContext>
    </div>
  );
};

export default DropDownBlanks;
