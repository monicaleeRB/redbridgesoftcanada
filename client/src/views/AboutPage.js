import React from "react";

import AboutHeader from "../components/Headers/AboutPageHeader";
import VisionBanner from "../components/Features/About/VisionBanner";
import AboutQuoteBanner from "../components/Features/About/AboutQuoteBanner";
import OrganizationBanner from "../components/Features/About/OrganizationBanner";
import CompanyInfoBanner from "../components/Features/About/CompanyInfoBanner";
import WTWUBanner from "../components/Features/WTWUBanner";

function AboutPage() {
  return (
    <>
      <AboutHeader />
      <VisionBanner />
      <AboutQuoteBanner />
      <OrganizationBanner />
      <CompanyInfoBanner />
      <WTWUBanner />
    </>
  );
}

export default AboutPage;
