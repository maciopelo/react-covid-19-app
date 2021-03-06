import React from "react";
import { Pie } from "react-chartjs-2";
import "chartjs-plugin-labels";
import "../styles/GlobalStats.css";

const GlobalStats = ({ globalStats }) => {
  const { TotalConfirmed, TotalDeaths, TotalRecovered } = globalStats;
  const data = {
    labels: ["Recovered", "Confirmed", "Deaths"],
    datasets: [
      {
        data: [TotalRecovered, TotalConfirmed, TotalDeaths],
        backgroundColor: ["#77DD77", "#6CA0DC", "#FF6961"],
      },
    ],
  };

  // const options = {
  //   responsive: true,

  //   legend: {
  //     position: "bottom",
  //     labels: {
  //       padding: 50,
  //       fontSize: 10,
  //     },
  //   },
  //   plugins: {
  //     labels: {
  //       render: "value",
  //       fontColor: "black",
  //       fontSize: 15,
  //       position: "border",
  //       fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
  //       fontStyle: "normal",
  //     },
  //   },

  // };

  const options = {
    responsive: true,
    legend: {
      position: "bottom",
      labels: {
        align: "center",
        padding: 20,
        fontSize: 18,
        fontColor: "black",
      },
    },
    plugins: {
      labels: {
        padding: 15,
        render: "value",
        fontColor: "black",
        fontSize: 18,
        shadowBlur: 10,
        position: "border",
        fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        fontStyle: "normal",
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="doughnut-wrapper">
      <Pie data={data} options={options} />
    </div>
  );
};

export default GlobalStats;
