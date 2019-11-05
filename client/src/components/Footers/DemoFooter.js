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

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul style={{float:"left"}}>
              <li>
                <img alt="Redbridge Soft Logo" src={require("../../assets/img/RedbridgeLogoText.png")} />
              </li>
              <li>
                <a
                  href=""
                  target="_blank"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href=""
                  target="_blank"
                >
                  What We Do
                </a>
              </li>
              <li>
                <a
                  href=""
                  target="_blank"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href=""
                  target="_blank"
                >
                  News
                </a>
              </li>
              <li>
                <a
                  href=""
                  target="_blank"
                >
                  Games
                </a>
              </li>
            </ul>
            <div style={{float:"right"}}>COPYRIGHT @ REDBRIDGE SOFT. ALL RIGHTS RESERVED</div>
          </nav>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
