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
function LocationBanner() {
  return (
    <>
        <div className="section"
            style={{
            backgroundImage:
                "url(" + require("../../assets/img/Map.png") + ")"
        }}>
            <Container>
                <div className="typography-line">
                    <h2 className="bold font-white">Location</h2>
                </div>
                <Row>
                    <Col className="content-center">
                        <div class="typography-line">
                            <img src={require("../../assets/img/MapCanada.png")} style={{width: "105%"}}/>
                        </div>
                        <div className="typography-line">
                            <h5 className="bold font-white">CANADA</h5>
                            <img src={require("../../assets/img/flag_canada.png")} />
                        </div>
                        <div class="typography-line">
                            <p className="font-white">330 – 825 Homer St, Vancouver BC, V6B2W2, CANADA</p>
                        </div>
                    </Col>
                    <Col className="content-center">
                        <div className="typography-line">
                            <img src={require("../../assets/img/MapSouthKorea.png")} style={{width: "105%"}}/>
                        </div>
                        <div class="typography-line">
                            <h5 className="bold font-white">KOREA</h5>
                            <img src={require("../../assets/img/flag_korea.png")} />
                        </div>
                        <div className="typography-line">
                            <p className="font-white">601, Kolonbillant Ⅱ, 222-8, Guro-3-dong, Guro-gu, Seoul, SOUTH KOREA</p>
                        </div>
                    </Col>
                    <Col className="content-center">
                        <div className="typography-line">
                            <img src={require("../../assets/img/MapSingapore.png")} style={{width: "105%"}}/>
                        </div>
                        <div className="typography-line">
                            <h5 className="bold font-white">SINGAPORE</h5>
                            <img src={require("../../assets/img/flag_singapore.png")} />
                        </div>
                        <div className="typography-line">
                            <p className="font-white">114 Lavender Street, #11-88 CT HUB 2, Singapore, 338729</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  );
}

export default LocationBanner;