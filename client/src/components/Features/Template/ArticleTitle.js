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
function ArticleTitle() {
  return (
    <>
        <div className="section">
            <Container>
                <div className="section-bar"></div>
                <div className="typography-line">
                    <h3 className="strong-title">News</h3>
                </div>
            </Container>
        </div>
    </>
  );
}

export default ArticleTitle;