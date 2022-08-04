import React from "react";
import { useState } from "react";
import "./Expense.css"
import ExpenseSpreadSheet from "./ExpenseSpreadSheet.js";
import NewExpenseForm from "./NewExpenseForm.js";

const Expense = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [currentCateID, setCurrentCateID] = useState(null);
  const togglePopup = () => {
    console.log("toggled!!!");
    console.log(`this is current category's ID!: ${props.defcategory.category_id}`);
    console.log(`this is current category: ${props.defcategory.title}`)
    setIsOpen(!isOpen);
  };

  return(
    <div id="expense">
      <div id="title">
        <p>{props.defcategory.title}</p>
        <button id="addExpense" onClick={togglePopup}>+</button>
      </div>
      <div id="spread-sheet">
        <ExpenseSpreadSheet 
          addExpense={props.addExpense} 
          date={props.date} 
          defcategory_id={props.defcategory.category_id}
          expenses={props.expenses}
          />
        
        {isOpen && (
        <NewExpenseForm
          addExpense={props.addExpense}
          handleClose={togglePopup}
          date={props.date}
          defcategory={props.defcategory}
        />
      )}
      </div>
    </div>)
}

export default Expense;