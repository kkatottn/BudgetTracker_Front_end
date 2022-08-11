import React from "react";
import { useState } from "react";
import "./Expense.css"
import ExpenseSpreadSheet from "./ExpenseSpreadSheet.js";
import NewExpenseForm from "./NewExpenseForm.js";

const Expense = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return(
    <div id="expense">
      <div id="title">
        <p>{props.category.title}</p>
        <button id="addExpense" onClick={togglePopup}>+</button>
      </div>
      <div id="spread-sheet">
        <ExpenseSpreadSheet 
          addExpense={props.addExpense} 
          date={props.date} 
          category_id={props.category.category_id}
          expenses={props.expenses}
          />
        
        {isOpen && (
        <NewExpenseForm
          addExpense={props.addExpense}
          handleClose={togglePopup}
          date={props.date}
          category={props.category}
        />
      )}
      </div>
    </div>)
}

export default Expense;