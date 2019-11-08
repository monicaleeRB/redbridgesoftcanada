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
import { Container, Jumbotron, Row, Col } from "reactstrap";

// core components
function ArticleInfoBanner() {
  return (
    <>
        <div>
            <Jumbotron className="background-lightGrey">
                <Container>
                    <Row>
                        <Col>
                            <h6>Redbridge Soft</h6>
                        </Col>
                        <Col xs="2" className="flex">
                            <i class="nc-icon nc-calendar-60"/>
                            <h6 className="ml-2">2015-06-27</h6>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </div>
    </>
  );
}

export default ArticleInfoBanner;