/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
// reactstrap components
import {
  Container, 
  Collapse,
  Navbar, NavLink, NavItem, Nav,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = useState(false);
  const [navbarLinkColor, setNavbarLinkColor] = useState("strong-title-white");

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
        setNavbarLinkColor("strong-title-darkGrey");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
        setNavbarLinkColor("strong-title-white");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
            <Link className="navbar-brand" to="/">Redbridge Soft</Link>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink>
                <Link className={navbarLinkColor} to="/about">About Us</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link className={navbarLinkColor} to="/business">What We Do</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link className={navbarLinkColor} to="/contact">Contact Us</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link className={navbarLinkColor} to="/news">News</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link className={navbarLinkColor} to="/games">Games</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
