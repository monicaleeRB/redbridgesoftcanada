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
import { Container, Row, Col } from "reactstrap";

// core components
function CentralCollegeCertification() {
  return (
    <>
        <div className="section background-lightGrey">
            <Container>
                <div className="section-bar"></div>
                <div className="typography-line">
                    <h2 className="strong-title">Certification</h2>
                    <br/>
                    <p>CENTRAL COLLEGE has been formally approved and accredited by various post-secondary education governing institutions of Canada.</p>
                    <br/>
                    <a href="https://centralcollegebc.ca/" className="mr-1 btn btn-outline-default strong-title">Visit the website</a>
                </div>
                <Row>
                    <Col>
                        <img className="badge-sm" alt="PTIB" src={require("../../../assets/img/cer01.png")} style={{width:"27%"}}/>
                        <div className="typography-line">
                            <h4 className="strong-title">PTIB</h4>
                            <br/>
                            <p>B.C. Private Training Institutions Branch</p>
                        </div>
                    </Col>
                    <Col>
                        <img className="badge-sm" alt="EQA" src={require("../../../assets/img/cer02.png")}/>
                        <div className="typography-line">
                            <h4 className="strong-title">EQA</h4>
                            <br/>
                            <p>Education Quality Assurance</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  );
}

export default CentralCollegeCertification;