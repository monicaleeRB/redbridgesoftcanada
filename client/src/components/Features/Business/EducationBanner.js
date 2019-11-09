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
import { Container, Row, Col } from "reactstrap";

function EducationBanner() {
  return (
    <>
        <div className="section background-lightGrey">
            <Container>
                <Row>
                    <Col sm="4" className="content-center align-center">
                        <div class="typography-line">
                            <img src={require("../../../assets/img/business_edu.png")} />
                        </div>
                    </Col>
                     <Col sm="8" className="content-center align-center">
                        <div class="typography-line-left">
                            <h2 className="bold">Education</h2>
                            <br/>
                            <p>
                                CENTRAL COLLEGE is a prestigious private institution established in 2000 that provides education in Traditional Chinese Medicine, ESL, as well as the highly anticipated IT program that is planned to be introduced in fall 2015. In addition, the college is accredited by the Ministry of Advanced Education in the province of British Columbia, providing opportunities to obtain international student visa, student loans, and other financial support from the government. The new 11,000 ft² campus offers the most up-to-date technologies and facilities. As a competitive institution, the college has successfully integrated the Asian culture in Canada while offering a local experience to our international students.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  );
}

export default EducationBanner;