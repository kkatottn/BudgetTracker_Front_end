import React from "react";
import "./ExpenseContainer.css"
import Expense from "./Expense.js";
import PropTypes from 'prop-types';


const ExpenseContainer = (props) => {

  const allCategories = [...props.defaultCategories, ...props.userCategories];
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

ExpenseContainer.propTypes = {
  userCategories: PropTypes.array.isRequired,
  addExpense: PropTypes.func.isRequired,
  date: PropTypes.object.isRequired,
  defaultCategories: PropTypes.array.isRequired,
  expenses: PropTypes.array.isRequired
};

export default ExpenseContainer;