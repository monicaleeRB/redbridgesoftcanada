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

// core components
function ArticleContent() {
  return (
    <>
        <div className="section">
            <Container>
                <img className="poster-sm" src={require("../../../assets/img/news_con.png")}/>
                <br/>
                <p>
                    REDBRIDGE SOFT is a leading provider in mobile game and web service established 2014 in Vancouver, Canada. With game, mobile and web development offices in South Korea and China, the company expertise and operates globally in the mobile game and web development market.
                </p>
                <br/>
                <br/>
                <div className="flex justify-center">
                    <a href="/news" className="mr-1 btn strong-title">Back to the list</a>
                </div>
            </Container>
        </div>
    </>
  );
}

export default ArticleContent;