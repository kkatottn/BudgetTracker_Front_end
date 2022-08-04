import React from "react";
import "./BudgetContainer.css"
import { useState } from "react";

const BudgetContainer = (props) => {
  //return(render) budget, budgetForm components?

  const defaultBudget = {
    amount: props.budget,
    month: 0,
    year: 0
  };

  
  let [currentBudget, setCurrentBudget] = useState(defaultBudget)
  
  const onFormChange = (event) => {
    const stateName = event.target.name;
    const inputValue = event.target.value;
    const newFormData = {...currentBudget};
    newFormData[stateName] = inputValue;
    newFormData["month"] = props.month;
    newFormData["year"] = props.year;
    setCurrentBudget(newFormData);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addBudget(currentBudget);
    setCurrentBudget(defaultBudget);
  };

  return(
  <div>
    {/* This is container for {props.user.name}'s budget and set budget form
    No need seperate components
    Have 2 features -> show set user's budget, 
                    -> ability to set their own budget */}
    <div>{currentBudget.amount}</div>
    <form onSubmit={handleSubmit}>
      <input
        type="integer"
        name="amount"
        placeholder="Add/Edit budget amount"
        onChange={onFormChange}
      ></input>
      <input
        type="submit"
        value="Add Budget"
        className="submit"
      ></input>
    </form>


  </div>);
}

export default BudgetContainer;