import React from "react";

import AboutHeader from "../components/Headers/AboutPageHeader";
import VisionBanner from "../components/Features/VisionBanner";
import AboutQuoteBanner from "../components/Features/AboutQuoteBanner";
import OrganizationBanner from "../components/Features/OrganizationBanner";
import CompanyInfoBanner from "../components/Features/CompanyInfoBanner";
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
