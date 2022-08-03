import React from "react";
import PropTypes, { number } from "prop-types";
import "./NewExpenseForm.css";
import { useState } from "react";

const defaultForm = {
  description: "",
  amount: null,
  month:null,
  year:2022,
  category_id: null
};

const NewExpenseForm = (props) => {
  const [formData, setFormData] = useState(defaultForm);

  const handleFormInput = (event) => {
    const inputElement = event.target;
    const name = inputElement.name;
    const value = inputElement.value;

    // make a new object based on form object
    const newForm = { ...formData };
    newForm[name] = value;
    newForm['month'] = props.date.month;
    newForm['category_id'] = props.defcategory.category_id;
    // console.log(newForm);
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
            <legend>Add new expense : <span id="selectedCategory">{props.defcategory.title}</span></legend>
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
};

export default NewExpenseForm;