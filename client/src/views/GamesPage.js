import React from "react";

import GamesPageHeader from "../components/Headers/GamesPageHeader";
import GamesOverview from "../components/Features/GamesOverview";
import WTWUBanner from "../components/Features/WTWUBanner";

function AboutPage() {
  return (
    <>
        <GamesPageHeader/>
        <GamesOverview/>
        <WTWUBanner/>
    </>
  );
}

export default AboutPage;