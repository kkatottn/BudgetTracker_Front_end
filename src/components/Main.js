import React from "react";
import "./Main.css";
import Profile from "./Profile.js"
import BudgetContainer from "./BudgetContainer.js"
import ChartContainer from "./ChartContainer.js"

const Main = (props) => {
  return <div id="main">
    <header>Kash Note</header>
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
        date={props.date}/>
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
        />
          </div>
        <div id="chart-container">
          <ChartContainer/>
          </div>
      </div>
    </main>
    <footer>This is footer</footer>
  </div>;
};

export default Main;


