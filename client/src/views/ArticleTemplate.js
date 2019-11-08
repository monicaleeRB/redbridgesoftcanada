import React from "react";

import NewsPageHeader from "../components/Headers/NewsPageHeader";
import ArticleTitle from "../components/Features/Template/ArticleTitle";
import ArticleInfoBanner from "../components/Features/Template/ArticleInfoBanner";
import ArticleContent from "../components/Features/Template/ArticleContent";
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