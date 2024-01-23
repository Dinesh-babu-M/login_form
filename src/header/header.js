import React, { useState } from "react";
import "./style.css";
import { VscClose } from "react-icons/vsc";
import { TfiMenu } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { logotext, socialprofils, introdata } from "../content_option";
import Typewriter from "typewriter-effect";
import Themetoggle from "../components/themetoggle/darktheme";

const Header = () => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
    {/* Typewriter Navbar */}
    <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">
            <h1 className="fluidz-48 mb-1x">
              <Typewriter
                options={{
                  strings: [
                    introdata.animated.first,
                    introdata.animated.second,
                    introdata.animated.third,
                    introdata.animated.fourth,
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                }}
              />
            </h1>
          </a>
        </div>
      </nav>
      </>
  );
};

export default Header;
