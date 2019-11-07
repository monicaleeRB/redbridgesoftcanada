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
function ContactSingapore() {
  return (
    <>
        <div className="section background-darkGrey">
            <Container>
                <div className="section-bar-white"></div>
                <div className="typography-line">
                    <h6 className="font-white">Singapore</h6>
                    <br/>
                    <img src={require("../../assets/img/flag_singapore.png")} />
                    <br/>
                    <h4 className="strong-title font-white">Singapore</h4>
                    <br/>
                    <p className="font-white">114 Lavender Street, #11-88 CT HUB 2, Singapore, 338729</p>
                    <h6 className="font-white">Tel. +65 6385 4389</h6>
                </div>
            </Container>
        </div>
    </>
  );
}

export default ContactSingapore;