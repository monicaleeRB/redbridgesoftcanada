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
import { Container } from "reactstrap";

function GamesPageHeader() {
  return (
    <>
        <div className="page-header section-dark" style={{backgroundImage:"url(" + require("../../assets/img/game_visual.png") + ")"}}>
            <div className="content-center">
            <Container>
                <div className="title-brand">
                    <img alt="Redbridge Soft Logo" src={require("../../assets/img/RedbridgeLogo.png")} />
                    <h1 className="presentation-title">Games</h1>
                </div>
            </Container>
            </div>
        </div>
    </>
  );
}

export default GamesPageHeader;
