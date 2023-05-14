import React, { useState } from "react";
import "./Navbar.css";
import { BiMenuAltRight } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const opneMenu = () => {
    console.log("open");
    setOpen((prev) => !prev);
  };
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Estate
          </NavLink>
          <ul className={open ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                onClick={opneMenu}
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                onClick={opneMenu}
                exact
                to="/golden"
                activeClassName="active"
                className="nav-links"
              >
                Golden Visa
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                onClick={opneMenu}
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                onClick={opneMenu}
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="menu-icon" onClick={opneMenu}>
            {open ? <MdClose size={50} /> : <BiMenuAltRight size={50} />}
          </div>
        </div>
      </nav>
    </>
  );
};
