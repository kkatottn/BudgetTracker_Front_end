import React, { useState } from "react";
import "./ChartContainer.css";
import Chart from "./Chart.js";
// import ChartSummary from "./ChartSummary.js";
// import ChartSelect from "./ChartSelect.js";

const ChartContainer = (props) => {

  const [selectChart, setSelectChart] = useState("doughnut");

  const handleChartChoice = (chart) => {
    setSelectChart(chart);
    // console.log(chart);
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
      <button className="chartButton" onClick={() => {handleChartChoice("bar")}}>Bar</button>
    </div>
    
  </div>);
}

export default ChartContainer;