import React from "react";
import "./ExpenseContainer.css"
import Expense from "./Expense.js";

const ExpenseContainer = (props) => {
  //add utility to test carosel
  const expenseComponents = props.defaultCategories.map((defCat) => {
    return <Expense defcategory={defCat.title}/>;
  }) 
  return(
    <div id="all-expenses">
      {expenseComponents}
    </div>
  );
}

export default ExpenseContainer;