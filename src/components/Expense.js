import React from "react";
import "./Expense.css"
import ExpenseSpreadSheet from "./ExpenseSpreadSheet.js";

const Expense = (props) => {
  return(
    <div>
      <div>Category Title</div>
      <div>
        <ExpenseSpreadSheet/>
      </div>
    </div>)
}

export default Expense;