import React, { useState } from "react";
import "./ChartContainer.css";
import Chart from "./Chart.js";
import PropTypes from 'prop-types';

const ChartContainer = (props) => {
  const [selectChart, setSelectChart] = useState("doughnut");

  const handleChartChoice = (chart) => {
    setSelectChart(chart);
  };

  return(
  <div id="chartWithSelector">
    <div>
      <Chart
        selectChart={selectChart}
        defaultCategories={props.defaultCategories}
        date={props.date}
        expenses={props.expenses}/>
    </div>
    
    <div>
      <button className={selectChart === "doughnut" ? "chartButton active" : "chartButton"} onClick={() => {handleChartChoice("doughnut")}}>Doughnut</button>
      <button className={selectChart === "bar" ? "chartButton active" : "chartButton"} onClick={() => {handleChartChoice("bar")}}>Bar</button>
    </div>
    
  </div>);
}

ChartContainer.propTypes = {
  date: PropTypes.object.isRequired,
  defaultCategories: PropTypes.array.isRequired,
  expenses: PropTypes.array.isRequired
};

export default ChartContainer;