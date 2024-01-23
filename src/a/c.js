import React, { useState } from "react";
import "./style.css";
import { VscClose } from "react-icons/vsc";
import { TfiMenu } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { logotext, socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle/darktheme";

const Headermain = () => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar-color">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {logotext}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleToggle}
            aria-label="Toggle navigation"
          >
            {isActive ? <VscClose /> : <TfiMenu />}
          </button>
          <div
            className={`collapse navbar-collapse ${isActive ? "show" : ""}`}
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  onClick={handleToggle}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                  onClick={handleToggle}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/project"
                  onClick={handleToggle}
                >
                  Project
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/skills"
                  onClick={handleToggle}
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item">
              <Themetoggle />
              </li>
            </ul>
           
          </div>
        </div>
      </nav>
    </>
  );
};

export default Headermain;
