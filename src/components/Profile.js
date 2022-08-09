import React from "react";
import "./Profile.css";
import Entry from "./Entry.js"

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

export default Profile;