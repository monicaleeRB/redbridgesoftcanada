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
import React from "react";
import { Switch, Route } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";

import LandingPage from "../views/LandingPage";
import AboutPage from "../views/AboutPage";
import BusinessPage from "../views/BusinessPage";
import ContactPage from "../views/ContactPage";
import NewsPage from "../views/NewsPage";
import GamesPage from "../views/GamesPage";

import ArticleTemplate from "../views/ArticleTemplate";

function Main() {
  return (
    <>
      <ScrollToTop>
        <Switch>
            <Route exact path="/" render={()=> <LandingPage/>}/>
            <Route path="/about" render={()=> <AboutPage/>}/>
            <Route path="/business" render={()=> <BusinessPage/>}/>
            <Route path="/contact" render={()=> <ContactPage/>}/>
            <Route path="/news" render={()=> <NewsPage/>}/>
            <Route path="/games" render={()=> <GamesPage/>}/>
            <Route path="/template" render={()=> <ArticleTemplate/>}/>
        </Switch>
      </ScrollToTop>
    </>
  );
}

export default Main;
