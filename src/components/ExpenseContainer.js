import React from "react";
import "./ExpenseContainer.css"
import Expense from "./Expense.js";

const ExpenseContainer = (props) => {
  //do something with props.userCategories
  //add utility to test carosel
  const allCategories = [...props.defaultCategories, ...props.userCategories];
  // console.log(allCategories);
  const expenseComponents = allCategories.map((category) => {
    return <Expense 
              category={category} 
              addExpense={props.addExpense} 
              date={props.date} 
              category_id={category.category_id}
              expenses={props.expenses}
              />;
  });
    
  return(
    <div id="all-expenses">
      {expenseComponents}
    </div>
  );
}

export default ExpenseContainer;