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
import { Container, Row, Col } from "reactstrap";

// core components
function OverviewBanner() {
  return (
    <>
        <div className="section">
            <Container>
                <Row>
                    <Col className="content-center">
                        <div class="typography-line">
                            <img src={require("../../../assets/img/GameIcon.png")} />
                        </div>
                        <div className="typography-line">
                            <h5 className="strong-title">Games</h5>
                        </div>
                        <div className="typography-line">
                            <h6>Mobile Games Development Service</h6>
                            <br/>
                            <h6><Link to="/business">View More</Link></h6>
                        </div>
                    </Col>
                    <Col className="content-center">
                        <div class="typography-line">
                            <img src={require("../../../assets/img/WebIcon.png")} />
                        </div>
                        <div class="typography-line">
                            <h5 className="strong-title">Web</h5>
                        </div>
                        <div class="typography-line">
                            <h6>Web Design Development Service</h6>
                            <br/>
                            <h6><Link to="/business">View More</Link></h6>
                        </div>
                    </Col>
                    <Col className="content-center">
                        <div class="typography-line">
                            <img src={require("../../../assets/img/EducationIcon.png")} />
                        </div>
                        <div class="typography-line">
                            <h5 className="strong-title">Education</h5>
                        </div>
                        <div class="typography-line">
                            <h6>Central College</h6>
                            <br/>
                            <h6><Link to="/business">View More</Link></h6>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  );
}

export default OverviewBanner;