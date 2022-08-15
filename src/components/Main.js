import React from "react";
import "./Main.css";
import Profile from "./Profile.js";
import BudgetContainer from "./BudgetContainer.js";
import ChartContainer from "./ChartContainer.js";
import logo from "../images/Nowhite.png";
import Greeting from "./Greeting";
import PropTypes from 'prop-types';

const Main = (props) => {
  return <div id="main">
    <div id="header">
        <div>
          <img id="logo" src={logo} alt="Kash Note Logo"/>
          <span id="kashnote">Kash Note</span>
        </div>
        <div id="greeting"> 
          <Greeting user={props.user}/>
        </div>
    </div>
    <main>
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
  </div>;
};


Main.propTypes = {
  user: PropTypes.object.isRequired,
  changeMonth: PropTypes.func.isRequired,
  userCategories: PropTypes.array.isRequired,
  addExpense: PropTypes.func.isRequired,
  addUserCategory: PropTypes.func.isRequired,
  budget: PropTypes.number.isRequired,
  date: PropTypes.object.isRequired,
  addBudget: PropTypes.func.isRequired,
  editBudget: PropTypes.func.isRequired,
  getExpenseTotal: PropTypes.func.isRequired,
  defaultCategories: PropTypes.array.isRequired,
  expenses: PropTypes.array.isRequired
};

export default Main;


