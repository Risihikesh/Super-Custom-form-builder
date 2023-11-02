import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./SubmitBtn.css";
import { useNavigate } from "react-router-dom";

const SubmitBtn = () => {
  const navigate = useNavigate();

  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // Button starts as disabled
  const [showPopup, setShowPopup] = useState(false);
  const categoryDragAndDropData = useSelector(
    (state) => state.componentDataSlice.CategoryDragAndDropData
  );
  const comprehensionData = useSelector(
    (state) => state.componentDataSlice.ComprehensionData
  );
  const dropDownBlanksData = useSelector(
    (state) => state.componentDataSlice.DropDownBlanksData
  );

  useEffect(() => {
    if (categoryDragAndDropData && comprehensionData && dropDownBlanksData) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [categoryDragAndDropData, comprehensionData, dropDownBlanksData]);

  const handleClick = () => {
    setShowPopup(!showPopup);
  };
  const handlePopupToggle = () => {
    setShowPopup(!showPopup);
  };
  const submitForm = () => {
    navigate("/success");

    try {
      axios
        .post("https://super-assistant-assignment.onrender.com/", {
          categoryDragAndDropData: categoryDragAndDropData,
          dropDownBlanksData: dropDownBlanksData,
          comprehensionData: comprehensionData,
        })
        .then(function (response) {
          console.log(response.data);
        })
        .catch((error) => alert(error + "Server Error"));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="submitDiv">
      <button
        className="submitBtn"
        onClick={handleClick}
        disabled={isButtonDisabled}
      >
        Submit
      </button>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Are You sure you want to submit the test?</h2>
            <button onClick={handlePopupToggle}>Close</button>
            <button onClick={submitForm}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubmitBtn;
