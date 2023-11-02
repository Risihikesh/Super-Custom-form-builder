import React from "react";
import "./HomePage.css";
import CategoryDragAndDrop from "../../Components/CategoryDragAndDrop/CategoryDragAndDrop";
import DropDownBlanks from "../../Components/DropDownBlanks/DropDownBlanks";
import Comprehension from "../../Components/Comprehension/Comprehension ";
import SubmitBtn from "../../Components/SubmitBtn/SubmitBtn";
import FilterComponent from "../../Components/FilterComponent/FilterComponent";
import Logo from "../../Icons/logo.png";

const HomePage = () => {
  return (
    <div className="home-page-container">
      <div className="content-section">
        <img className="logo-image" src={Logo} alt="Logo" />
        <CategoryDragAndDrop />
        <DropDownBlanks />
        <Comprehension />
        <SubmitBtn />
      </div>

      <div className="filter-section">
        <FilterComponent />
      </div>
    </div>
  );
};

export default HomePage;
