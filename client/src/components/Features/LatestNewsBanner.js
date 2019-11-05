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
import { Container, Card, CardImg, CardTitle, CardText, CardDeck, CardBody, CardFooter } from "reactstrap";

// core components
function LatestNewsBanner() {
  return (
    <>
        <div className="section">
            <Container>
                <div class="typography-line">
                    <h2>Latest News</h2>
                    <button type="button" class="mr-1 btn btn-outline-default">View More</button>
                </div>
                <CardDeck>
                    <Card>
                        <CardImg top width="100%" src={require("../../assets/img/GamesCover.png")} alt="Games News Cover Image" />
                        <CardBody>
                            <CardTitle>Games</CardTitle>
                            <CardText>REDBRIDGE SOFT is a game development and web service publishing company that evolves with the ever-growing industry.</CardText>
                            <CardText><small className="text-muted"><a href="...">View More</a></small></CardText>
                        </CardBody>
                        <CardFooter style={{display: "flex", justifyContent: "space-between"}}>
                            <small className="text-muted">2019-11-05</small>
                            <small className="text-muted">Views: 197</small>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src={require("../../assets/img/WebCover.png")} alt="Web News Cover Image" />
                        <CardBody>
                            <CardTitle>Web</CardTitle>
                            <CardText>REDBRIDGE SOFT offers all web services including web development, mobile application, and consulting; currently providing quality web services to 40+ businessness.</CardText>
                            <CardText><small className="text-muted"><a href="...">View More</a></small></CardText>
                        </CardBody>
                        <CardFooter style={{display: "flex", justifyContent: "space-between"}}>
                            <small className="text-muted">2019-11-05</small>
                            <small className="text-muted">Views: 197</small>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src={require("../../assets/img/EducationCover.png")} alt="Education News Cover Image" />
                        <CardBody>
                            <CardTitle>Education</CardTitle>
                            <CardText>CENTRAL COLLEGE is a prestigious private school established in 2000 that provides education in Traditional Chinese Medicine, ESL, as well as the highly anticipated IT.</CardText>
                            <CardText><small className="text-muted"><a href="...">View More</a></small></CardText>
                        </CardBody>
                        <CardFooter style={{display: "flex", justifyContent: "space-between"}}>
                            <small className="text-muted">2019-11-05</small>
                            <small className="text-muted">Views: 197</small>
                        </CardFooter>
                    </Card>
                </CardDeck>
            </Container>
        </div>
    </>
  );
}

export default LatestNewsBanner;