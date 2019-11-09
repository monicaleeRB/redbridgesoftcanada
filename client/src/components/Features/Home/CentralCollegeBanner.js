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
import { Container } from "reactstrap";

function CentralCollegeBanner() {
  return (
    <>
        <div className="section background-darkGrey">
            <Container>
                <div className="typography-line">
                    <h2 className="bold font-white">LEADING PROFESSIONAL CAREER INSTITUTION IN VANCOUVER</h2>
                    <br />
                    <img src={require("../../../assets/img/CentralCollege.png")}/>
                    <h3 className="bold font-white">Central College</h3>
                </div>
            </Container>
        </div>
    </>
  );
}

export default CentralCollegeBanner;