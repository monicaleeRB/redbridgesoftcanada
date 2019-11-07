import React from "react";

import NewsPageHeader from "../components/Headers/NewsPageHeader";
import FullNewsBanner from "../components/Features/FullNewsBanner";
import WTWUBanner from "../components/Features/WTWUBanner";

function NewsPage() { 
  return (
    <>
        <NewsPageHeader/>
        <FullNewsBanner/>
        <WTWUBanner/>
    </>
  );
}

export default NewsPage;