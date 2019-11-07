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
function WebBanner() {
  return (
    <>
        <div className="section">
            <Container>
                <Row>
                     <Col sm="8" className="content-center align-center">
                        <div class="typography-line-left">
                            <h2 className="bold">Web</h2>
                            <br/>
                            <p>
                                REDBRIDGE SOFT currently provides quality web services to 40+ businesses by offering all web services including web development, mobile application and consulting. We are determined to offer the best client satisfaction by providing future-oriented idea and planning solutions.
                            </p>
                        </div>
                    </Col>
                    <Col sm="4" className="content-center align-center">
                        <div class="typography-line">
                            <img src={require("../../assets/img/business_web.png")} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  );
}

export default WebBanner;