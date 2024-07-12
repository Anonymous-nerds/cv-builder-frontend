// import React from 'react'

import Navbar from "../../Components/NavbarDashboard";
import AppFooter from "../../Sections/AppFooter/AppFooter";
import OrganisationList from "../../Sections/OrganisationList/OrganisationList";

const Organisation = () => {
  return (
    <div className="Organisation">
      <Navbar />
      <OrganisationList />
      <AppFooter />
    </div>
  );
};

export default Organisation;
