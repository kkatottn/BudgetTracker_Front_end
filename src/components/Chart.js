import React from "react";
import "./Chart.css"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { CategoryScale, LinearScale, BarElement, Title} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = (props) => {

  const currentChart = props.selectChart;
  const labels = props.defaultCategories.map((defCat) => {return defCat.title});
  console.log("this is categories",labels);

  const allExpenses = props.expenses;
  console.log("this is all expenses of this user at this month",allExpenses);

  const monthNum = props.date.month;
  const monthDic = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const selectedMonth = monthDic[monthNum-1];


  const options = {
    responsive: true,
    plugins: {
      legend: {
        display:false,
        position: 'top',
      },
      title: {
        display: false,
        text: `Expenses for ${selectedMonth}`,
      },
    },
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: `Expenses for ${selectedMonth}`,
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  if(currentChart === "doughnut"){
    return(
      <div id="chart">
        <h5 id="label">Expenses for {selectedMonth}</h5>
        <Doughnut  data={data} />
      </div>);
  }
  else{
    return(
      <div id="chart">
        <h5 id="label">Expenses for {selectedMonth}</h5>
        <Bar options={options} data={data} />
      </div>);
  }
}

export default Chart;