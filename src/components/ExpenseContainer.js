import React from "react";
import "./ExpenseContainer.css"
import Expense from "./Expense.js";

const ExpenseContainer = () => {
  return(<div>
    {/* Passing expenseData and categories from app level and passing to Expense component ,
    render multiple expense components using map function
    expenseData(list of expense objects), categories(list of category-string)
    discuss about 'ol' tag and 'div' tag when return */}
    <Expense/>

  </div>)
}

export default ExpenseContainer;