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
import { Container } from "reactstrap";

// core components
function CentralCollegeBanner() {
  return (
    <>
        <div className="section" style={{backgroundColor: "DimGrey"}}>
            <Container>
                <div class="typography-line">
                    <h1>LEADING PROFESSIONAL CAREER INSTITUTION IN VANCOUVER</h1>
                    <img src={require("../../assets/img/CentralCollege.png")}/>
                    <h3>Central College</h3>
                </div>
            </Container>
        </div>
    </>
  );
}

export default CentralCollegeBanner;