// import React from "react";
// import "./NewCategoryForm.css"
// import { useState } from "react";

// const NewCategoryForm = (props) => {

//   const defaultCatForm = {
//     title: "",
//     month: props.date.month,
//     year: props.date.year,
//   };

//   const [catForm, setCatForm] = useState(defaultCatForm);

//   const handleFormInput = (event) => {
//     const inputElement = event.target;
//     const name = inputElement.name;
//     const value = inputElement.value;
//     const newCatForm = { ...catForm, month: props.date.month };
//     newCatForm[name] = value;

//     setCatForm(newCatForm);
//   };


//   const handleFormSubmission = (event) => {
//     event.preventDefault();
//     props.addUserCategory(catForm);
//     // document.getElementById("newCatInput").value = "";

//   };
//   return(<div>

//     <form onSubmit={handleFormSubmission}>
//       <label>Category title : </label>
//       <input id="newCatInput"
//         type="text"
//         name="title"
//         value={catForm.title}
//         onChange={handleFormInput}></input>
//       <button id="addCategory" type="submit">Add new category</button>
//     </form>
//   </div>);
// }

// export default NewCategoryForm;

