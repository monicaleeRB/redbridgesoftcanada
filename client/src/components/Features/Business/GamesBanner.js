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
function GamesBanner() {
  return (
    <>
        <div className="section background-lightGrey">
            <Container>
                <Row>
                    <Col sm="4" className="content-center align-center">
                        <div class="typography-line">
                            <img src={require("../../../assets/img/business_game.png")} />
                        </div>
                    </Col>
                     <Col sm="8" className="content-center align-center">
                        <div class="typography-line-left">
                            <h2 className="bold">Games</h2>
                            <br/>
                            <p>
                                REDBRIDGE SOFT is a game development and web service publishing company that evolves with the ever-growing industry. Expertizing in development projects and services combined with overseas market knowledge, we continuously provide high quality games through R&D efforts to become a global leader in the industry.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  );
}

export default GamesBanner;