import React from "react";

import BusinessHeader from "../components/Headers/BusinessPageHeader";
import BusinessArea from "../components/Features/Business/BusinessArea";
import GamesBanner from "../components/Features/Business/GamesBanner";
import WebBanner from "../components/Features/Business/WebBanner";
import EducationBanner from "../components/Features/Business/EducationBanner";
import CentralCollegeTimeline from "../components/Features/Business/CentralCollegeTimeline";
import CentralCollegeCertification from "../components/Features/Business/CentralCollegeCertification";
import BusinessQuoteBanner from "../components/Features/Business/BusinessQuoteBanner";
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