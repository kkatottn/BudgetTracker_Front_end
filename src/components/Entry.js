import React from "react";
import "./Entry.css"
import Navigation from "./Navigation.js";
import ExpenseContainer from "./ExpenseContainer.js";
import PropTypes from 'prop-types';


const Entry = (props) => {
  return(
  <div id="entry-container">
    <div id="navigation">
      <Navigation changeMonth={props.changeMonth} date={props.date}/>
    </div>
    <div id="expense-container">
      <ExpenseContainer
      defaultCategories={props.defaultCategories}
      userCategories={props.userCategories}
      addExpense={props.addExpense}
      date={props.date}
      expenses={props.expenses}
      />
    </div>
  </div>);
}


Entry.propTypes = {
  changeMonth: PropTypes.func.isRequired,
  userCategories: PropTypes.array.isRequired,
  addExpense: PropTypes.func.isRequired,
  addUserCategory: PropTypes.func.isRequired,
  date: PropTypes.object.isRequired,
  defaultCategories: PropTypes.array.isRequired,
  expenses: PropTypes.array.isRequired
};

export default Entry;