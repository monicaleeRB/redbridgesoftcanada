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
import { Container, Row, Col, Jumbotron } from "reactstrap";

// core components
function RedbridgeCreativeGroup() {
  return (
    <>
        <div className="page-header background-grey">
            <Container>
                <Row>
                    <Col sm="5" className="content-center" style={{alignSelf: "center"}}>
                        <div class="typography-line">
                            <img src={require("../../assets/img/RedbridgeCreativeGroup.png")} />
                        </div>
                    </Col>
                    <Col className="content-center">
                        <div class="typography-line">
                            <img src={require("../../assets/img/RedbridgeGame.png")} />
                        </div>
                    </Col>
                    <Col className="content-center" style={{alignSelf: "center"}}>
                        <div class="typography-line">
                            <h2>LET'S PLAY MOBILE GAMES</h2> 
                            <h6>We base social network platforms to create fun and enjoyable games for everyone.</h6>
                            <a href="...">View More</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <div>
            <Jumbotron fluid className="background-red">
                <Container fluid>
                    <Row>
                        <Col sm="5" className="content-center">
                            <div style={{display:"flex"}}>
                                <h3>CREATIVE WEB DESIGN <br /> 
                                    <small>Website (PC, Mobile) Design, Planning, Maintenance, Electronic Commerce Marketing, System Development, Other IT Service.</small>
                                    <small><a href="...">View More</a></small>
                                </h3>
                                <img src={require("../../assets/img/WebDesignIcon.png")} />
                            </div>
                        </Col>
                        <Col></Col>
                        <Col style = {{display: "flex", justifyContent: "space-evenly"}}>
                            <div>
                                <img src={require("../../assets/img/AndroidIcon.png")} />
                            </div>
                            <div>
                                <img src={require("../../assets/img/AppleIcon.png")} />
                            </div>
                            <div>
                                <img src={require("../../assets/img/WindowsIcon.png")} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </div>
    </>
  );
}

export default RedbridgeCreativeGroup;