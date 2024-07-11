// import React from "react";

import Navbar from "../../Components/NavbarDashboard";
import AppFooter from "../../Sections/AppFooter/AppFooter";
import DashboardContent from "../../Sections/DashboardContent/DashboardContent";

const Dashboard = () => {
  return (
    <div className="Dashboard bg-[#f8f8f8] text-black">
      <Navbar />
      <DashboardContent />
      <AppFooter />
    </div>
  );
};

export default Dashboard;
