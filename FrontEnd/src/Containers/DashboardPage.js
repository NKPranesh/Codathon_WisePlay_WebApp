import React, { useEffect, useState } from "react";
import DashboardContent from "../components/dashboardContent";
import DashboardNavbar from "../components/dashboarfNavbar";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import "../stylesheets/DashboardPage.css";

const DashboardPage = (props) => {
  const navigate = useNavigate();
  let [isprofile,setIsProfile]=useState(false);

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

  const fetchTestsData = () => {
    const cookies = new Cookies();
    console.log(cookies);
  };

  useEffect(() => {
    authenticate();
    fetchTestsData();
  }, []);

  return (
    <div className="DBPageDiv">
      <DashboardNavbar setIsProfile={setIsProfile}/>
      <DashboardContent testsData={props.testsData} isprofile={isprofile}/>
    </div>
  );
};

export default DashboardPage;
