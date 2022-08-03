import React from "react";
import "./Entry.css"
import Navigation from "./Navigation.js";
import ExpenseContainer from "./ExpenseContainer.js";
import NewCategoryForm from "./NewCategoryForm.js"

const Entry = (props) => {
  return(
  <div id="entry-container">
    <div id="navigation">
      <Navigation changeMonth={props.changeMonth}/>
    </div>
    <div id="expense-container">
      <ExpenseContainer
      defaultCategories={props.defaultCategories}/>
    </div>
    <div id="category-form">
      <NewCategoryForm/>
    </div>
  </div>);
}

export default Entry;