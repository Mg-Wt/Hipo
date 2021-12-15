import { useState } from "react";
import "./index.css";
import slideNavList from "../../../Router/RouterList";
import NavbarToggle from "./NavbarToggle.jsx";
import { withRouter } from "react-router";

const MainNavBar = ({ match, location }) => {
  const { pathname } = location;
  const filterData = slideNavList.filter((nav, idx) => pathname === nav.path)[0];
  return (
    <div className="main-navbar">
      <div className="nav-title">{filterData?.meta}</div>
      <NavbarToggle />
    </div>
  );
};
export default withRouter(MainNavBar);
