import { Section8BusinessContinuityArrangementsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Section8BusinessContinuityArrangementsPage = () => {
  return (
    <CommonPage
      pageTitle={`Section 8: Business Continuity Arrangements`}
      src={Section8BusinessContinuityArrangementsImage}
      backRoute="/raisp-registration-account-information-service-provider"
    />
  );
};

export default Section8BusinessContinuityArrangementsPage;
