import React from "react";
import "./ExpenseContainer.css"
import Expense from "./Expense.js";

const ExpenseContainer = (props) => {
  //add utility to test carosel
  const expenseComponents = props.defaultCategories.map((defCat) => {
    return <Expense defcategory={defCat} addExpense={props.addExpense} date={props.date} category_id={defCat.category_id}/>;
  }) 
  return(
    <div id="all-expenses">
      {expenseComponents}
    </div>
  );
}

export default ExpenseContainer;