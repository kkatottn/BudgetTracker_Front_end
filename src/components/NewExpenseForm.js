import React from "react";
import PropTypes from "prop-types";
import "./NewExpenseForm.css";
import { useState } from "react";


const NewExpenseForm = (props) => {
  const defaultForm = {
    description: "",
    amount: "",
    month: props.date.month,
    year: props.date.year,
    category_id: props.category.category_id
  };

  const [formData, setFormData] = useState(defaultForm);

  const handleFormInput = (event) => {
    const inputElement = event.target;
    const name = inputElement.name;
    const value = inputElement.value;
    const newForm = { ...formData };
    newForm[name] = value;

    setFormData(newForm);
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    props.addExpense(formData);
    props.handleClose();
  };

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <form onSubmit={handleFormSubmission}>
          <fieldset>
            <legend>Add new expense : <span id="selectedCategory">{props.category.title}</span></legend>
          <div id="des-input">
            <label>Description</label> 
            <span id="input">
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleFormInput}>
              </input>
            </span><br/>
          </div>
          
          <div id="amount-input">
            <label>Amount</label>
            <span id="input">
              <input
                type="number"
                step="0.01" 
                min="0"
                name="amount"
                value={formData.amount}
                onChange={handleFormInput}>
              </input>
            </span>
            <button type="submit">Add</button><br/>
          </div>
          </fieldset></form>
      </div>
    </div>
  );
};

NewExpenseForm.propTypes = {
  addExpense: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  date: PropTypes.object.isRequired,
  category: PropTypes.array.isRequired
};

export default NewExpenseForm;