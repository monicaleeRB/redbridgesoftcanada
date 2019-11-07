import React from "react";

import ContactPageHeader from "../components/Headers/ContactPageHeader";
import ContactCanada from "../components/Features/ContactCanada";
import ContactKorea from "../components/Features/ContactKorea";
import ContactSingapore from "../components/Features/ContactSingapore";
import ContactQuoteBanner from "../components/Features/ContactQuoteBanner";
import WTWUBanner from "../components/Features/WTWUBanner";

function ContactPage() { 
  return (
    <>
        <ContactPageHeader/>
        <ContactCanada/>
        <ContactKorea/>
        <ContactSingapore/>
        <ContactQuoteBanner/>
        <WTWUBanner/>
    </>
  );
}

export default ContactPage;