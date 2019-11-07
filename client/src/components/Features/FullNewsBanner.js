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
import { 
    Container, Row, Col,
    Card, CardImg, CardTitle, CardText, CardDeck, CardBody, CardFooter,
    InputGroup, InputGroupAddon, Button, Input,
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
    Pagination, PaginationItem, PaginationLink } from "reactstrap";

// core components
function LatestNewsBanner() {
    
    // const [dropdownOpen, setDropdownOpen] = useState(false);

    // const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
    <>
        <div className="section">
            <Container>
                <div className="section-bar"></div>
                <div className="typography-line">
                    <h2 className="strong-title">News</h2>
                </div>
                <Row>
                    <Col xs="1"></Col>
                    <Col xs="2">
                        <Dropdown
                        // isOpen={dropdownOpen} toggle={toggle}
                        >
                            <DropdownToggle caret>Explore</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>ALL</DropdownItem>
                                <DropdownItem>SUBJECT</DropdownItem>
                                <DropdownItem>CONTENT</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Col>
                    <Col xs="8">
                        <InputGroup>
                            <Input placeholder="Search"/>
                            <InputGroupAddon addonType="append">
                            <Button color="secondary" size="sm"><i class="nc-icon nc-zoom-split" /></Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </Col>
                    <Col xs="1"></Col>
                </Row>
                <br/>
                <br/>
                <CardDeck>
                    <Card>
                        <CardImg top width="100%" src={require("../../assets/img/GamesCover.png")} alt="Games News Cover Image" />
                        <CardBody>
                            <CardTitle><h6>Games</h6></CardTitle>
                            <br/>
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
                            <CardTitle><h6>Web</h6></CardTitle>
                            <br/>
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
                            <CardTitle><h6>Education</h6></CardTitle>
                            <br/>
                            <CardText>CENTRAL COLLEGE is a professional career training institution established in 2000 that provides education in Traditional Chinese Medicine, ESL, as well as the highly anticipated IT.</CardText>
                            <CardText><small className="text-muted"><a href="...">View More</a></small></CardText>
                        </CardBody>
                        <CardFooter style={{display: "flex", justifyContent: "space-between"}}>
                            <small className="text-muted">2019-11-05</small>
                            <small className="text-muted">Views: 197</small>
                        </CardFooter>
                    </Card>
                </CardDeck>
                <br/>
                <nav aria-label="Page navigation example">
                    <Pagination className="pagination justify-content-center" listclassName="justify-content-center">
                    <PaginationItem disabled>
                        <PaginationLink previous href="#pablo" onClick={e => e.preventDefault()} tabindex="-1"></PaginationLink>
                    </PaginationItem>
                    <PaginationItem active>
                        <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>1</PaginationLink>
                    </PaginationItem>
                    {/* <PaginationItem>
                        <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>3</PaginationLink>
                    </PaginationItem> */}
                    <PaginationItem disabled>
                        <PaginationLink next href="#pablo" onClick={e => e.preventDefault()}></PaginationLink>
                    </PaginationItem>
                    </Pagination>
                </nav>
            </Container>
        </div>
    </>
    );
}

export default LatestNewsBanner;