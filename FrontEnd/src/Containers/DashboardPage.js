import React, { useEffect } from "react";
import DashboardContent from "../components/dashboardContent";
import DashboardNavbar from "../components/dashboarfNavbar";
import { useNavigate } from "react-router-dom";
import "../stylesheets/DashboardPage.css";

const DashboardPage = (props) => {
  const navigate = useNavigate();

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
    authenticate();
  }, []);

  return (
    <div className="DBPageDiv">
      <DashboardNavbar />
      <DashboardContent testsData={props.testsData} />
    </div>
  );
};

export default DashboardPage;
