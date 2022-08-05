import React from "react";
import "./BudgetContainer.css"
import { useState } from "react";

const BudgetContainer = ({budget, month, year, addBudget, editBudget}) => {
  //return(render) budget, budgetForm components?
  let budgetMessage = null;
  let firstBudget = true;
  if (budget === 0) {
    budgetMessage = "No budge has been set for this month!"
  }else {
    budgetMessage = "Current budget is: "
    firstBudget = false;
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
    } else {
      setDisableSubmit(false);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstBudget === true){
      console.log("I'm adding new budget")
      addBudget(currentBudget);
    }else {
      console.log("I'm editing the budget")
      editBudget(currentBudget)
      console.log(budget);
    }
    
  };

  return(
  <div id="budget-container">
    {/* This is container for {props.user.name}'s budget and set budget form
    No need seperate components
    Have 2 features -> show set user's budget, 
                    -> ability to set their own budget */}
    <h3>{budgetMessage}</h3>
    <div id="amount">{budget}</div>
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        name="amount"
        value={currentBudget.amount}
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