import React from "react";

import BusinessHeader from "../components/Headers/BusinessPageHeader";
import BusinessArea from "../components/Features/BusinessArea";
import GamesBanner from "../components/Features/GamesBanner";
import WebBanner from "../components/Features/WebBanner";
import EducationBanner from "../components/Features/EducationBanner";
import CentralCollegeTimeline from "../components/Features/CentralCollegeTimeline";
import CentralCollegeCertification from "../components/Features/CentralCollegeCertification";
import BusinessQuoteBanner from "../components/Features/BusinessQuoteBanner";
import WTWUBanner from "../components/Features/WTWUBanner";

function BusinessPage() { 
  return (
    <>
        <BusinessHeader/>
        <BusinessArea/>
        <GamesBanner/>
        <WebBanner/>
        <EducationBanner/>
        <CentralCollegeTimeline/>
        <CentralCollegeCertification/>
        <BusinessQuoteBanner/>
        <WTWUBanner/>
    </>
  );
}

export default BusinessPage;