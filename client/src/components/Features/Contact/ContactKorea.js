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
function ContactKorea() {
  return (
    <>
        <div className="section background-darkGrey">
            <Container>
                <div className="section-bar-white"></div>
                <div className="typography-line">
                    <h6 className="font-white">Korea</h6>
                    <br/>
                    <img src={require("../../../assets/img/flag_korea.png")} />
                    <br/>
                    <h4 className="strong-title font-white">Seoul</h4>
                    <br/>
                    <p className="font-white">601, Kolonbillant Ⅱ, 222-8, Guro-3-dong, Guro-gu, Seoul, SOUTH KOREA</p>
                    <h6 className="font-white">Tel. +82 2 857 4787</h6>
                </div>
            </Container>
        </div>
    </>
  );
}

export default ContactKorea;