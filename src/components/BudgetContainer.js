import React from "react";
import "./BudgetContainer.css"
import { useState } from "react";

const BudgetContainer = ({user, budget, month, year, addBudget, editBudget}) => {
  //return(render) budget, budgetForm components?
  let budgetMessage = null;
  let firstBudget = true;
  if (budget === null || budget===undefined) {
    budgetMessage = "No budget has been set for this month!"
  }else {
    budgetMessage = "Current budget: "
    firstBudget = false;
  }

  const defaultBudget = {
    amount: budget,
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
    if (currentBudget.amount === 0 || currentBudget.amount === null) {
      setDisableSubmit(true);
    } else {
      setDisableSubmit(false);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstBudget === true){
      addBudget(currentBudget);
    }else {
      editBudget(currentBudget)
    }
    
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