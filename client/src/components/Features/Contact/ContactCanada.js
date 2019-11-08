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
function ContactCanada() {
  return (
    <>
        <div className="section background-red">
            <Container>
                <div className="section-bar-white"></div>
                <div className="typography-line">
                    <h6 className="font-white">Canada</h6>
                    <br/>
                    <img src={require("../../../assets/img/flag_canada.png")} />
                    <br/>
                    <h4 className="strong-title font-white">Vancouver</h4>
                    <br/>
                    <p className="font-white">330 – 825 Homer St, Vancouver BC, V6B2W2, CANADA</p>
                    <h6 className="font-white">Tel. +1 778 379 1123</h6>
                </div>
            </Container>
        </div>
    </>
  );
}

export default ContactCanada;