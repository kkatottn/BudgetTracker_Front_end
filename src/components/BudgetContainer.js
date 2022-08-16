import React from "react";
import "./BudgetContainer.css";
import { useState } from "react";
import PropTypes from 'prop-types';

const BudgetContainer = ({budget, month, year, addBudget, editBudget, getExpenseTotal}) => {

  let budgetMessage = null;
  let firstBudget = true;
  let expenseTotal = 0;
  let buttonValue = "Add Budget"
  let budgetState = ""
  let budgetColor = ""

  if (budget === 0) {
    budgetMessage = "No budget has been set for this month!"
    expenseTotal = getExpenseTotal();
  }
  else {
    budgetMessage = `Current budget: $${budget}`
    firstBudget = false;
    expenseTotal = getExpenseTotal();
    buttonValue = "Edit Budget"
  }

  const defaultBudget = {
    amount: 0,
    month: 0,
    year: 0
  };

  let [currentBudget, setCurrentBudget] = useState(defaultBudget)
  let [disableSubmit, setDisableSubmit] = useState(true);

  const onFormChange = (event) => {
    const stateName = event.target.name;
    const inputValue = event.target.value;
    const newFormData = {...currentBudget};
    newFormData[stateName] = inputValue;
    newFormData["month"] = month;
    newFormData["year"] = year;
    setCurrentBudget(newFormData);
    if (currentBudget.amount === "" || currentBudget.amount === null || currentBudget.amount === 0) {
      setDisableSubmit(true);
    }

    else {
      setDisableSubmit(false);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstBudget === true){
      addBudget(currentBudget);
      setCurrentBudget(defaultBudget);
      setDisableSubmit(true);
    }
    else {
      editBudget(currentBudget);
      setCurrentBudget(defaultBudget);
      setDisableSubmit(true);
    }
  };

  if (budget - expenseTotal >= 100 && !firstBudget) {
    budgetState = "You're doing great! You have spent: "
    budgetColor = "good"
  }else if (budget - expenseTotal < 0 &&!firstBudget) {
    budgetState = "You have gone over your budget! You have spent: "
    budgetColor = "bad"
  }else if(!firstBudget){
    budgetState = "You are getting close to your budget goal. You have spent: "
    budgetColor = "close"
  }

  return(
  <div id="budget">
    <h3>{budgetMessage}</h3>
    <div className="expenseSum" id={budgetColor}>
      <div id="budgetstate">
        {budgetState}
      </div>
      <div className="expensetotal">${expenseTotal}</div>
    </div>
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        name="amount"
        value={currentBudget.amount}
        placeholder="Add/Edit budget"
        onChange={onFormChange}
      ></input>
      <input
        type="submit"
        value={buttonValue}
        disabled={disableSubmit}
        className="submit"
      ></input>
    </form>
  </div>);
}

BudgetContainer.propTypes = {
  budget: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  addBudget: PropTypes.func.isRequired,
  editBudget: PropTypes.func.isRequired,
  getExpenseTotal: PropTypes.func.isRequired,

};

export default BudgetContainer;