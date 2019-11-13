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
import { 
    Nav, NavItem, NavLink,
    TabContent, TabPane } from "reactstrap";

function GamesPageHeader() {

    const [activeTab, setActiveTab] = React.useState("1");

    const toggle = tab => {
      if (activeTab !== tab) {
        setActiveTab(tab);
      }
    };

  return (
    <>
        <div className="section background-black">
            <div className="nav-tabs-navigation">
                <div className="nav-tabs-wrapper">
                <Nav role="tablist" tabs>
                    <NavItem>
                        <NavLink
                            className={activeTab === "1" ? "active" : ""}
                            onClick={() => {toggle("1")}}
                        >
                            <h2 className="strong-title-white">Bridge War</h2>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={activeTab === "2" ? "active" : ""}
                            onClick={() => {toggle("2")}}
                        >
                            <h2 className="strong-title-white" style={{marginLeft:"8em"}}>Serpent Wheel</h2>
                        </NavLink>
                    </NavItem>
                </Nav>
                </div>
          </div>

          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
                <img className="poster-sm" src={require("../../../assets/img/game01_01.png")}/>
                <div className="poster-background" style={{backgroundImage:"url(" + require("../../../assets/img/game01_02.png") + ")"}}>
                    <div className="game-demo">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/H-rJakY9bE0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <img className="poster-sm" src={require("../../../assets/img/game01_03.png")}/>
            </TabPane>

            <TabPane tabId="2">
                <img className="poster-sm" src={require("../../../assets/img/game02.png")}/>
            </TabPane>
          </TabContent>
        </div>
    </>
  );
}

export default GamesPageHeader;