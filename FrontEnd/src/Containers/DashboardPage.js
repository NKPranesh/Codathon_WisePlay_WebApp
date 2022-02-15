import React, { useEffect, useState } from "react";
import DashboardContent from "../components/dashboardContent";
import DashboardNavbar from "../components/dashboarfNavbar";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import "../stylesheets/DashboardPage.css";

const DashboardPage = (props) => {
  const navigate = useNavigate();
  let [isprofile, setIsProfile] = useState(false);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [difficulty, setDifficulty] = useState("");
  let [testData, setTestData] = useState([]);

  const getData = async () => {
    await fetch(process.env.React_App_Backend_domain + "/dashboard", {
      method: "get",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setName(responseJson.name);
        setTestData(responseJson.testsData);
        setEmail(responseJson.email);
        setDifficulty(responseJson.difficulty);
      })
      .catch((error) => {
        console.log("error");
      });

    return 1;
  };

  const authenticate = async () => {
    let isAuthenticated = false;

    await fetch(process.env.React_App_Backend_domain + "/authenticate", {
      method: "get",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if ("status" in responseJson) {
          isAuthenticated = true;
        }
      })
      .catch((error) => {
        console.log("error");
        isAuthenticated = false;
        navigate("/login");
      });

    return isAuthenticated;
  };

  useEffect(() => {
    getData();
    authenticate();
  }, []);

  return (
    <div className="DBPageDiv">
      <DashboardNavbar setIsProfile={setIsProfile} />
      <DashboardContent
        isprofile={isprofile}
        name={name}
        testsData={testData}
        email={email}
        difficulty={difficulty}
      />
    </div>
  );
};

export default DashboardPage;
