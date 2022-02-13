import React from "react";
import { Line, Doughnut, Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import "../stylesheets/dashboard.css";

const Dashboard = (props) => {
  let tests = props.testsData;
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
    labels: ["Test 1", "Test 2", "Test 3", "Test 4", "Test 5", "Test 6"],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 0],
        fill: false,
        borderColor: "#0058FF",
        tension: 0.5,
      },
    ],
  };

  const doughnutData = {
    labels: ["Correct", "Wrong"],
    datasets: [
      {
        data: [78, 22],
        backgroundColor: ["#0058FF", "#F24B0F"],
        hoverOffset: 4,
      },
    ],
  };

  const barData = {
    labels: ["Speed", "Deep Thinking", "Memory", "Logical Reasoning", "Focus"],
    datasets: [
      {
        barPercentage: 0.1,
        categoryPercentage: 1,
        label: "score",
        backgroundColor: "#57B8FF",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 0,
        data: [65, 59, 80, 81, 56, 100],
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
                  title: {
                    display: true,
                    text: "Score",
                  },
                },
              },
              plugins: {
                legend: {
                  display: false,
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
                    cutout: 40,
                    plugins: {
                      legend: {
                        labels: {
                          boxWidth: 10,
                        },
                        display: false,
                        position: "right",
                      },
                    },
                  }}
                />
              </div>
              <div className="DBDoughnutcolorMainDiv">
                <div className="DbDoughnutcolordiv">
                  <div className="DbDoughnutcolorboxcorrect"></div>
                  <span>Points Scored 78%</span>
                </div>
                <div className="DbDoughnutcolordiv">
                  <div className="DbDoughnutcolorboxwrong"></div>
                  <span>Points Lost 22%</span>
                </div>
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
                    scales: {
                      x: {
                        grid: {
                          display: false,
                          color: "#E6E9F4",
                        },
                        ticks: {
                          display: false,
                        },
                      },
                      y: {
                        ticks: {
                          stepSize: 0,
                        },
                        grid: {
                          display: false,
                        },
                      },
                    },
                    plugins: {
                      legend: {
                        display: false,
                      },
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
                      cutout: 25,
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
