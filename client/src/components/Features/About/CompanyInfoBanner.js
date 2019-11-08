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
function CompanyInfoBanner() {
  return (
    <>
        <div className="section background-black">
            <Container>
                <div className="section-bar"></div>
                <div className="typography-line">
                    <h2 className="strong-title font-white">Company Information</h2>
                    <br />
                    <h6 className="font-white">COMPANY NAME</h6>
                    <p className="font-white">Redbridge Soft Ltd.<br />Leisheng Pte. Ltd.<br />Red Bridge Co., Ltd.</p>
                    <br />
                    <h6 className="font-white">ESTABLISHED</h6>
                    <p className="font-white">2014 November 14</p>
                    <br />
                    <h6 className="font-white">LOCATIONS</h6>
                    <p className="font-white">Canada (Headquarters)<br />South Korea (Development Office)<br />Singapore (Development & Marketing Office)</p>
                    <br />
                    <h6 className="font-white">WEBPAGE</h6>
                    <p className="font-white">http://redbridgesoft.com</p>
                </div>
            </Container>
        </div>
    </>
  );
}

export default CompanyInfoBanner;