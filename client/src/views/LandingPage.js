import React from "react";

import IndexHeader from "../components/Headers/IndexHeader";
import OverviewBanner from "../components/Features/OverviewBanner";
import RedbridgeCreativeGroup from "../components/Features/RedbridgeCreativeGroup";
import CentralCollegeBanner from "../components/Features/CentralCollegeBanner";
import LatestNewsBanner from "../components/Features/LatestNewsBanner";
import LocationBanner from "../components/Features/LocationBanner";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexHeader />
      <div className="main">
        <OverviewBanner />
        <RedbridgeCreativeGroup />
        <CentralCollegeBanner />
        <LatestNewsBanner />
        <LocationBanner />
      </div>
    </>
  );
}

export default LandingPage;
