import React, { useState } from "react";
import "./Comprehension.css";
import { useDispatch } from "react-redux";
import { ComprehensionData } from "../../store/userSlice";
import ComponentHeader from "../ComponentHeader/ComponentHeader";

const Comprehension = () => {
  const dispatch = useDispatch();

  const [expanded, setExpanded] = useState(true);
  const [selectedOption, setSelectedOption] = useState("");
  const options = [
    "Water Evaporate From The Surfaceinto The Atmosphere.",
    "Water Only Exists In Liquid Form.",
    "Water Moves From The Surface to deep underground.",
    "Water Remains In The Clouds Forever.",
  ];

  const toggleDropdown = () => {
    setExpanded(!expanded);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  dispatch(ComprehensionData(selectedOption));
  const handleReset = () => {
    setSelectedOption();
  };
  return (
    <div className="ComprehensionDiv">
      <ComponentHeader ComprehensionReset={handleReset} questionNumber={3} />
      <div className="questionDivision">
        <p>The Water Cycle</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="dropdown-container">
        <div className={`dropdown ${expanded ? "expanded" : ""}`}>
          <button className="dropdown-toggle" onClick={toggleDropdown}>
            ▼ Question 3 :
          </button>
          {expanded && (
            <ul className="options-list">
              {options.map((option) => (
                <li
                  key={option}
                  className={`option ${
                    selectedOption === option ? "selected" : ""
                  }`}
                  onClick={() => handleOptionSelect(option)}
                >
                  <input
                    type="radio"
                    className="radio-input"
                    checked={selectedOption === option}
                    readOnly
                  />
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comprehension;
