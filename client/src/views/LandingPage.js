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
