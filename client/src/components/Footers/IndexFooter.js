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
/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import { Row, Container } from "reactstrap";

function IndexFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul className="footer-nav-brand">
              <li>
                <img alt="Redbridge Soft Logo" src={require("../../assets/img/RedbridgeLogoText.png")} />
              </li>
            </ul>
            <ul className="footer-nav-links">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/business">What We Do</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
              <li>
                <Link to="/games">Games</Link>
              </li>
            </ul>
          </nav>
          <div class="credits ml-auto">
            <span class="copyright">COPYRIGHT @ REDBRIDGE SOFT. ALL RIGHTS RESERVED</span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default IndexFooter;
