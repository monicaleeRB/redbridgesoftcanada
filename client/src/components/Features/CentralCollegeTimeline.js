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
function CentralCollegeTimeline() {
  return (
    <>
        <div className="section background-lightGrey">
            <Container>
                <div className="section-bar"></div>
                <div className="typography-line">
                    <h2 className="strong-title">History</h2>
                    <br/>
                    <img className="poster-lg" src={require("../../assets/img/central_college_history.png")}/>
                </div>
            </Container>
        </div>
    </>
  );
}

export default CentralCollegeTimeline;