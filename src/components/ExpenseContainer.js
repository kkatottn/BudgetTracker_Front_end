import React from "react";
import "./ExpenseContainer.css"
import Expense from "./Expense.js";

const ExpenseContainer = (props) => {
  const testData = ["Grocery", "Restaurant", "Discretionary"];
  //add utility to test carosel
  const expenseComponents = testData.map((data) => {
    //change to props.defaultCategories.map((defCat))
    return <Expense defcategory={data}/>;
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