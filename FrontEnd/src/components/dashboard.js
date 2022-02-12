import React from "react";
import { Line, Doughnut, Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import "../stylesheets/dashboard.css";

const Dashboard = () => {
  let historyData = [
    {
      speed: "10%",
      deepThinking: "10%",
      memory: "10%",
      focus: "10%",
      logicalReasoning: "10%",
    },
    {
      speed: "20%",
      deepThinking: "20%",
      memory: "20%",
      focus: "20%",
      logicalReasoning: "20%",
    },
    {
      speed: "30%",
      deepThinking: "30%",
      memory: "30%",
      focus: "30%",
      logicalReasoning: "30%",
    },
    {
      speed: "40%",
      deepThinking: "40%",
      memory: "40%",
      focus: "40%",
      logicalReasoning: "40%",
    },
  ];
  const data = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40, 0],
        fill: false,
        borderColor: "#0058FF",
        tension: 0.5,
      },
    ],
  };

  const doughnutData = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const barData = {
    labels: ["January", "February", "March"],
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [65, 59, 80, 81, 56],
      },
    ],
  };

  return (
    <div className="DBMainDiv">
      <div className="DBHeadDiv">
        <span>Dashboard</span>
      </div>
      <div className="DBOverallStatsDiv">
        <div className="DBGraphDiv">
          <Line
            className="DBGraph"
            data={data}
            options={{
              bezierCurve: true,
              scales: {
                x: {
                  grid: {
                    display: true,
                    color: "#E6E9F4",
                  },
                },
                y: {
                  grid: {
                    display: false,
                  },
                },
              },
              plugins: {
                title: {
                  display: true,
                  text: "Cryptocurrency prices",
                },
                legend: {
                  display: true,
                  position: "top",
                },
              },
            }}
          />
        </div>
        <div className="DBAverageDiv">
          <div className="DBAverageTopDiv">
            <div className="DBAverageTopHead">
              <span>Average Score</span>
            </div>
            <div className="DBAverageTopChart">
              <div className="DBDoughnutDiv">
                <Doughnut
                  className="DBDoughnut"
                  data={doughnutData}
                  options={{
                    plugins: {
                      legend: {
                        display: false,
                        position: "right",
                      },
                    },
                  }}
                />
              </div>
            </div>
          </div>
          <div className="DBAverageBottomDiv">
            <div className="DBAverageBottomHead">
              <span>Average Categorical Score</span>
            </div>
            <div className="DBAverageBottomChart">
              <div className="DBBarDiv">
                <Bar
                  data={barData}
                  options={{
                    title: {
                      display: true,
                      text: "Average Rainfall per month",
                      fontSize: 20,
                    },
                    legend: {
                      display: true,
                      position: "right",
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="DBHistoryDiv">
        {historyData.map((test) => {
          let testNo = historyData.indexOf(test) + 1;
          return (
            <div
              className={testNo === 1 ? "DBHistory" : "DBHistory AddMargin"}
              key={testNo}
            >
              <div className="DBHistoryHead">
                <span>{"Test" + testNo}</span>
              </div>
              <div className="DBHistoryBody">
                <div className="DBHistoryGraph">
                  <Doughnut
                    className="DBDoughnutHistory"
                    data={doughnutData}
                    options={{
                      plugins: {
                        legend: {
                          display: false,
                          position: "right",
                        },
                      },
                    }}
                  />
                </div>
                <div className="DBHistoryText">
                  <span>{"Speed: " + test.speed}</span>
                  <span>{"Deep Thinking: " + test.deepThinking}</span>
                  <span>{"Memory: " + test.memory}</span>
                  <span>{"Logical Reasoning: " + test.logicalReasoning}</span>
                  <span>{"Focus: " + test.focus}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
