import React, { useEffect, useState } from "react";
import "./css/navbar.css";

const Navbar = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        src={require("../assests/images/netflix.png")}
        alt="Netflix Logo"
        className="nav_logo"
      />
      <img
        src={require("../assests/images/boy.png")}
        alt="Netflix Logo"
        className="nav_avatar"
      />
    </div>
  );
};

export default Navbar;
