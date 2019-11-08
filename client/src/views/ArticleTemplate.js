import React from "react";

import NewsPageHeader from "../components/Headers/NewsPageHeader";
import ArticleTitle from "../components/Features/ArticleTitle";
import ArticleInfoBanner from "../components/Features/ArticleInfoBanner";
import ArticleContent from "../components/Features/ArticleContent";
import WTWUBanner from "../components/Features/WTWUBanner";

function NewsPage() { 
  return (
    <>
        <NewsPageHeader/>
        <ArticleTitle/>
        <ArticleInfoBanner/>
        <ArticleContent/>
        <WTWUBanner/>
    </>
  );
}

export default NewsPage;