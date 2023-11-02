import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import "./FilterComponent.css";
const FilterComponent = () => {
  const [answerCount, setanswerCount] = useState(0);
  const [answerCount1, setanswerCount1] = useState(0);
  const [answerCount2, setanswerCount2] = useState(0);

  const categoryDragAndDropData = useSelector(
    (state) => state.componentDataSlice.CategoryDragAndDropData
  );
  const comprehensionData = useSelector(
    (state) => state.componentDataSlice.ComprehensionData
  );
  const dropDownBlanksData = useSelector(
    (state) => state.componentDataSlice.DropDownBlanksData
  );
  const ResetCheck = useSelector(
    (state) => state.componentDataSlice.ResetCheck
  );

  console.log(ResetCheck);

  useEffect(() => {
    const isEmpty = Object.keys(categoryDragAndDropData).length === 0;

    if (isEmpty !== true) {
      setanswerCount(1);
    }
    if (dropDownBlanksData) {
      setanswerCount1(1);
    }
    if (comprehensionData) {
      setanswerCount2(1);
    }

    if (ResetCheck === 1) {
      setanswerCount(0);
    }
    if (ResetCheck === 2) {
      setanswerCount1(0);
    }
    if (ResetCheck === 3) {
      setanswerCount2(0);
    }
  }, [
    categoryDragAndDropData,
    ResetCheck,
    comprehensionData,
    dropDownBlanksData,
  ]);

  return (
    <div>
      <div className="filter-component-container">
        <div className="filterDiv">
          <p className="summary-box">Questions</p>
          <p>🟢Answered: {answerCount + answerCount2 + answerCount1} </p>
          <p>🔵UnAnswered: {3 - (answerCount + answerCount2 + answerCount1)}</p>
          <p>📋MarkedForReview: 0</p>
        </div>
        <div className="summary-heading">
          <button
            className={answerCount === 0 || ResetCheck === 1 ? "blue" : "green"}
          >
            1
          </button>
          <button
            className={
              answerCount1 === 0 || ResetCheck === 2 ? "blue" : "green"
            }
          >
            2
          </button>
          <button
            className={
              answerCount2 === 0 || ResetCheck === 3 ? "blue" : "green"
            }
          >
            3
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
