import { Chapter13ReportingAndNotificationsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Chapter13ReportingAndNotificationsPage = () => {
  return (
    <CommonPage
      pageTitle={`FCA Application / FCA Guide to Payment Services and Electronic Money Regulation / Chapter 13: Reporting and notifications`}
      src={Chapter13ReportingAndNotificationsImage}
      backRoute="/payment-services-and-electronic-money-our-approach"
    />
  );
};

export default Chapter13ReportingAndNotificationsPage;
