import React from "react";
import "./Chart.css"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { CategoryScale, LinearScale, BarElement, Title} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import PropTypes from 'prop-types';


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
  const categoryIds = props.defaultCategories.map((defCat) => {return defCat.category_id});

  const getTotalAmount = (category_id) => {
    let total = 0;
    for (const expense of props.expenses){
      if (expense.category_id === category_id){
        let amount = parseFloat(expense.amount);
        total += amount;
      }
    }
    total = parseFloat(total.toFixed(2));
    return total;
  }

  const dataForChart = Array.apply(0, Array(labels.length));
  categoryIds.map((catID,idx) => {
    return dataForChart[idx] = getTotalAmount(catID);
  })
  
  const monthNum = props.date.month;
  const monthDic = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const selectedMonth = monthDic[monthNum-1];

  const optionsForBar = {
    responsive: true,
    scales: {
      y: {
        ticks: { color: 'white', beginAtZero: true }
      },
      x: {
        ticks: { color: 'white', beginAtZero: true }
      }
    },
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

  const optionsForDoughnut = {
    responsive: true,
    plugins: {
      legend:{
        labels: {
            color: 'white'
        }}
      },
      datalabels: {
        display: true,
        font: {
          color: "white"
        }
      }
  }

  const data = {
    labels: labels,
    datasets: [
      {
        label: `Expenses for ${selectedMonth}`,
        data: dataForChart,
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
        <Doughnut options={optionsForDoughnut} data={data} />
      </div>);
  }
  else{
    return(
      <div id="chart">
        <h5 id="label">Expenses for {selectedMonth}</h5>
        <Bar options={optionsForBar} data={data} />
      </div>);
  }
}

Chart.propTypes = {
  selectChart: PropTypes.func.isRequired,
  date: PropTypes.object.isRequired,
  defaultCategories: PropTypes.array.isRequired,
  expenses: PropTypes.array.isRequired
};

export default Chart;