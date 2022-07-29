import React from "react";
import "./Entry.css"
import Navigation from "./Navigation.js";
import ExpenseContainer from "./ExpenseContainer.js";
import NewCategoryForm from "./NewCategoryForm.js"

const Entry = () => {
  return(<div>
    <Navigation/>
    <ExpenseContainer/>
    <NewCategoryForm/>
  </div>);
}

export default Entry;