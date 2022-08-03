import React from "react";
import "./ExpenseContainer.css"
import Expense from "./Expense.js";

const ExpenseContainer = () => {
  const testData = ["Amazon", "Grocery", "Restaurant"];
  const expenseComponents = testData.map((data) => {
    return <Expense category={data}/>;
  }) 
  return(<div id="all-expenses">
    {/* Passing expenseData and categories from app level and passing to Expense component ,
    render multiple expense components using map function
    expenseData(list of expense objects), categories(list of category-string)
    discuss about 'ol' tag and 'div' tag when return */}
      {expenseComponents}

  </div>)
}

export default ExpenseContainer;