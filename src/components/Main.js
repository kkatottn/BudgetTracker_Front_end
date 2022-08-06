import React from "react";
import "./Main.css";
import Profile from "./Profile.js";
import BudgetContainer from "./BudgetContainer.js";
import ChartContainer from "./ChartContainer.js";
import logo from "../images/KashnoteLogo.png";

const Main = (props) => {
  return <div id="main">
    <div id="header">
        <img id="logo" src={logo} alt="Kash Note Logo"/>
        <span id="kashnote">Kash Note</span>
        </div>
    <main>
      {/* This is main page */}
      <div id="profile-container">
        <Profile 
        user={props.user}
        expenses={props.expenses}
        changeMonth={props.changeMonth}
        defaultCategories={props.defaultCategories}
        userCategories={props.userCategories}
        addExpense={props.addExpense}
        date={props.date}
        addUserCategory={props.addUserCategory}
        />

        </div>
      <div id="extra-feature">
        <div id="budget-container">
          <BudgetContainer 
            user={props.user}
            budget={props.budget} 
            month={props.date.month} 
            year={props.date.year} 
            addBudget={props.addBudget} 
            editBudget={props.editBudget}
            getExpenseTotal={props.getExpenseTotal}
        />
          </div>
        <div id="chart-container">
          <ChartContainer
            defaultCategories={props.defaultCategories}
            date={props.date}
            expenses={props.expenses}/>
          </div>
      </div>
    </main>
    <footer></footer>
  </div>;
};

export default Main;


