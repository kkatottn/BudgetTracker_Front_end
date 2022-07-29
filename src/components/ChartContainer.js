import React from "react";
import "./ChartContainer.css";
import Chart from "./Chart.js";
import ChartSummary from "./ChartSummary.js";
import ChartSelect from "./ChartSelect.js";


const ChartContainer = () => {
  return(<div>This is container for Charts!!
    <Chart/>
    <ChartSummary/>
    <ChartSelect/>
  </div>);
}

export default ChartContainer;