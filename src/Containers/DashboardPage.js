import React from "react";
import DashboardContent from "../components/dashboardContent";
import DashboardNavbar from "../components/dashboarfNavbar";
import "../stylesheets/DashboardPage.css"
const DashboardPage = () => {
    return (
      <div className="DBPageDiv">
        <DashboardNavbar/>
        <DashboardContent/>
      </div>
    );
  };
  
  export default DashboardPage;
  