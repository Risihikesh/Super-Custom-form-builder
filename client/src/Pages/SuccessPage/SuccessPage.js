import React from "react";
import checkIcon from "../../Icons/check.png";
import "./SuccessPage.css";

const SuccessPage = () => {
  return (
    <div className="success-page-container">
      <img className="check-icon" src={checkIcon} alt="Checkmark Icon" />
      <div className="success-message">
        <p className="message-heading">Test Complete</p>
        <p className="message-text">
          Congratulations! Your response has been recorded. You may now close
          the tab.
        </p>
      </div>
    </div>
  );
};

export default SuccessPage;
