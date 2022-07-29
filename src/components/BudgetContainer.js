import React from "react";
import "./BudgetContainer.css"

const BudgetContainer = (props) => {
  //return(render) budget, budgetForm components?
  return(<div>
    This is container for {props.user.name}'s budget and set budget form
  </div>);
}

export default BudgetContainer;