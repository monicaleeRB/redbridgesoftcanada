import React from "react";

import ContactPageHeader from "../components/Headers/ContactPageHeader";
import ContactCanada from "../components/Features/Contact/ContactCanada";
import ContactKorea from "../components/Features/Contact/ContactKorea";
import ContactSingapore from "../components/Features/Contact/ContactSingapore";
import ContactQuoteBanner from "../components/Features/Contact/ContactQuoteBanner";
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