import React from "react";
import "./Expense.css"
import ExpenseSpreadSheet from "./ExpenseSpreadSheet.js";

const Expense = (props) => {
  return(
    <div id="expense">
      <div id="title">
        <p>{props.category}</p>
      </div>
      <div id="spread-sheet">
        <ExpenseSpreadSheet/>
      </div>
    </div>)
}

export default Expense;