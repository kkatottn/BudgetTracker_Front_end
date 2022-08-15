import React from "react";
import "./Profile.css";
import Entry from "./Entry.js"
import PropTypes from 'prop-types';


const Profile = (props) => {
  return(
    <div id="profile">
      <div id="entry">
          <Entry 
          changeMonth={props.changeMonth}
          defaultCategories={props.defaultCategories}
          userCategories={props.userCategories}
          addExpense={props.addExpense}
          date={props.date}
          expenses={props.expenses}
          addUserCategory={props.addUserCategory}/>
      </div>
    </div>
    );
}

Profile.propTypes = {
  changeMonth: PropTypes.func.isRequired,
  userCategories: PropTypes.array.isRequired,
  addExpense: PropTypes.func.isRequired,
  addUserCategory: PropTypes.func.isRequired,
  date: PropTypes.object.isRequired,
  defaultCategories: PropTypes.array.isRequired,
  expenses: PropTypes.array.isRequired
};

export default Profile;