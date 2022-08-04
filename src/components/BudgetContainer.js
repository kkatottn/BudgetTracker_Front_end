import React from "react";
import "./BudgetContainer.css"
import { useState } from "react";

const BudgetContainer = (props) => {
  //return(render) budget, budgetForm components?
  let budgetMessage = "No budget has been set for this month!"

  const defaultBudget = {
    amount: 1000,
    month: 0,
    year: 0
  };

  
  let [currentBudget, setCurrentBudget] = useState(defaultBudget)
  let [disableSubmit, setDisableSubmit] = useState(true);

  if (currentBudget.amount !== null) {
    budgetMessage = "Current budget is:"
  }
  
  const onFormChange = (event) => {
    const stateName = event.target.name;
    const inputValue = event.target.value;
    const newFormData = {...currentBudget};
    newFormData[stateName] = inputValue;
    newFormData["month"] = props.month;
    newFormData["year"] = props.year;
    setCurrentBudget(newFormData);
    if (currentBudget.amount === 0 || currentBudget.amount === null) {
      setDisableSubmit(true);
    } else {
      setDisableSubmit(false);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addBudget(currentBudget);
  };

  return(
  <div id="budget-container">
    {/* This is container for {props.user.name}'s budget and set budget form
    No need seperate components
    Have 2 features -> show set user's budget, 
                    -> ability to set their own budget */}
    <h3>{budgetMessage}</h3>
    <div id="amount">{currentBudget.amount}</div>
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        name="amount"
        placeholder="Add/Edit budget amount"
        onChange={onFormChange}
      ></input>
      <input
        type="submit"
        value="Add Budget"
        disabled={disableSubmit}
        className="submit"
      ></input>
    </form>


  </div>);
}

export default BudgetContainer;