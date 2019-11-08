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
function AboutQuoteBanner() {
  return (
    <>
        <div className="section" style={{backgroundImage:"url(" + require("../../assets/img/QuoteBanner.png") + ")"}}>
            <Container>
                <div className="typography-line">
                    <h3 className="strong-title font-white">Connect with the world with the vision of a better future</h3>
                    <br />
                    <h5 className="strong-title font-white">- Redbridge Soft -</h5>
                </div>
            </Container>
        </div>
    </>
  );
}

export default AboutQuoteBanner;