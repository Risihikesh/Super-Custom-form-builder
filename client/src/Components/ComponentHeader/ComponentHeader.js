import React from "react";
import QuestionIcon from "../../Icons/question.png";
import WishlistIcon from "../../Icons/wishlist.png";
import RefreshIcon from "../../Icons/refresh-page-option.png";
import { useDispatch } from "react-redux";
import { ResetCheck } from "../../store/userSlice";
import "./ComponentHeader.css";

const ComponentHeader = ({
  CategoryDragAndDropReset,
  questionNumber,
  DropDownBlanksReset,
  ComprehensionReset,
}) => {
  const dispatch = useDispatch();

  const handleReset = () => {
    if (CategoryDragAndDropReset) {
      CategoryDragAndDropReset();
      dispatch(ResetCheck(1));
    } else if (DropDownBlanksReset) {
      DropDownBlanksReset();
      dispatch(ResetCheck(2));
    } else if (ComprehensionReset) {
      ComprehensionReset();
      dispatch(ResetCheck(3));
    }
  };

  return (
    <div className="componentHeader">
      <div>
        <p className="questionText">Question {questionNumber}</p>
      </div>
      <div className="iconContainer">
        <img src={QuestionIcon} alt="Question" />
        <img src={WishlistIcon} alt="Wishlist" />
        <img onClick={handleReset} src={RefreshIcon} alt="Refresh" />
      </div>
    </div>
  );
};

export default ComponentHeader;
