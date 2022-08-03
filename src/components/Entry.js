import React from "react";
import "./Entry.css"
import Navigation from "./Navigation.js";
import ExpenseContainer from "./ExpenseContainer.js";
import NewCategoryForm from "./NewCategoryForm.js"

const Entry = (props) => {
  return(<div>
    <Navigation changeMonth={props.changeMonth}/>
    <ExpenseContainer/>
    <NewCategoryForm/>
  </div>);
}

export default Entry;