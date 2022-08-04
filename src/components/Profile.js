import React from "react";
import Greeting from "./Greeting";
import "./Profile.css";
import Entry from "./Entry.js"

const Profile = (props) => {
  return(
    <div id="profile">
      <div id="greeting"> 
        <Greeting user={props.user}/>
      </div>
      <div id="entry">
          <Entry 
          changeMonth={props.changeMonth}
          defaultCategories={props.defaultCategories}
          addExpense={props.addExpense}
          date={props.date}/>
      </div>
    </div>
    );
          
      
    
}

export default Profile;