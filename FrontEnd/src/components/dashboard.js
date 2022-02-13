import React, { useEffect } from "react";
import { Line, Doughnut, Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import "../stylesheets/dashboard.css";

const Dashboard = (props) => {
  let testdata = props.testsData;

  useEffect(() => {
    console.log(props);
  }, []);

  let i = 0,
    j = 0;
  let linelabel = [];
  var linedata = [];
  for (i = 0; i < testdata.length; i++) {
    linelabel[i] = "Test" + (i + 1);
  }
  for (i = 0; i < testdata.length; i++) {
    let sum = 0;
    for (j = 0; j < 5; j++) {
      sum += testdata[i][j];
    }
    linedata[i] = sum / 5;
  }
  linedata[i] = 0;
  linedata[i + 1] = 100;
  const data = {
    labels: linelabel,
    datasets: [
      {
        label: "score",
        data: linedata,
        fill: false,
        borderColor: "#0058FF",
        tension: 0.5,
      },
    ],
  };
  let sum = 0;
  for (i = 0; i < linedata.length; i++) {
    sum += linedata[i];
  }
  sum /= linedata.length;
  sum = sum.toFixed(2);
  const calculatedoughnutdata = (index) => {
    let avg = 0;
    for (let i = 0; i < 5; i++) {
      avg += testdata[index][i];
    }
    avg /= 5;
    return {
      labels: ["Correct", "Wrong"],
      datasets: [
        {
          data: [avg, 100 - avg],
          backgroundColor: ["#0058FF", "#F24B0F"],
          hoverOffset: 4,
        },
      ],
    };
  };
  const doughnutData = {
    labels: ["Correct", "Wrong"],
    datasets: [
      {
        data: [sum, 100 - sum],
        backgroundColor: ["#0058FF", "#F24B0F"],
        hoverOffset: 4,
      },
    ],
  };
  let barvalues = [0, 0, 0, 0, 0];
  for (i = 0; i < testdata.length; i++) {
    for (j = 0; j < 5; j++) {
      barvalues[j] += testdata[i][j];
    }
  }
  for (j = 0; j < 5; j++) {
    barvalues[j] /= testdata.length;
  }
  barvalues[j] = 0;
  barvalues[j + 1] = 100;
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
        data: barvalues,
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
                  <span>Points Scored {sum}%</span>
                </div>
                <div className="DbDoughnutcolordiv">
                  <div className="DbDoughnutcolorboxwrong"></div>
                  <span>Points Lost {100 - sum}%</span>
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
                        ticks: {
                          maxRotation: 0,
                          minRotation: 0,
                          font: {
                            size: 6,
                            // weight:600,
                          },
                        },
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
        {testdata.map((test) => {
          let testNo = testdata.indexOf(test) + 1;
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
                    data={calculatedoughnutdata(testNo - 1)}
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
                  <span>{"Speed: " + test[0] + "%"}</span>
                  <span>{"Deep Thinking: " + test[1] + "%"}</span>
                  <span>{"Memory: " + test[2] + "%"}</span>
                  <span>{"Logical Reasoning: " + test[3] + "%"}</span>
                  <span>{"Focus: " + test[4] + "%"}</span>
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
