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

import AboutHeader from "../components/Headers/AboutPageHeader";
import VisionBanner from "../components/Features/VisionBanner";
import QuoteBanner from "../components/Features/QuoteBanner";
import OrganizationBanner from "../components/Features/OrganizationBanner";
import CompanyInfoBanner from "../components/Features/CompanyInfoBanner";
import WTWUBanner from "../components/Features/WTWUBanner";

function AboutPage() { 
  return (
    <>
      <AboutHeader />
      <VisionBanner />
      <QuoteBanner />
      <OrganizationBanner />
      <CompanyInfoBanner />
      <WTWUBanner />
    </>
  );
}

export default AboutPage;
