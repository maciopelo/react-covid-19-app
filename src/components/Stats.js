import React from "react";
import { Line } from "react-chartjs-2";
import "../styles/Stats.css";

const Stats = ({ currentCountryStats, handleBackButton }) => {
  const dates = currentCountryStats.map((item) => item.Date.slice(0, 10));
  const confirmed = currentCountryStats.map((item) => item.Confirmed);
  const recovered = currentCountryStats.map((item) => item.Recovered);
  const deaths = currentCountryStats.map((item) => item.Deaths);
  const data = {
    labels: dates,
    datasets: [
      {
        label: "confirmed",
        fill: "1",
        lineTension: 0.1,
        backgroundColor: "rgba(108,160,220,0.4)",
        borderColor: "rgba(108,160,220,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#000",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "black",
        pointHoverBorderColor: "rgba(108,160,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 3,
        pointHitRadius: 5,
        data: confirmed,
      },
      {
        label: "recovered",
        fill: "2",
        lineTension: 0.1,
        backgroundColor: "rgba(119,221,119,0.6)",
        borderColor: "green",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "white",
        pointBackgroundColor: "#000",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "black",
        pointHoverBorderColor: "rgba(119,221,119,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 3,
        pointHitRadius: 5,
        data: recovered,
        spanGaps: false,
      },
      {
        label: "deaths",
        fill: "origin",
        lineTension: 0.1,
        backgroundColor: "rgba(255,105,97,1)",
        borderColor: "red",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "white",
        pointBackgroundColor: "black",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "black",
        pointHoverBorderColor: "rgba(255,105,97,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 3,
        pointHitRadius: 5,
        data: deaths,
        spanGaps: false,
      },
    ],
  };

  const options = {
    responsive: true,

    legend: {
      position: "top",
      labels: {
        padding: 10,
        fontSize: 14,
        boxWidth: 30,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="stats">
      <Line data={data} options={options} />
      <button onClick={handleBackButton}> Back </button>
    </div>
  );
};

export default Stats;
