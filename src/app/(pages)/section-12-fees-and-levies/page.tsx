import { Section12FeesAndLeviesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Section12FeesAndLeviesPage = () => {
  return (
    <CommonPage
      pageTitle={`Section 12: Fees and Levies`}
      src={Section12FeesAndLeviesImage}
      backRoute="/raisp-registration-account-information-service-provider"
    />
  );
};

export default Section12FeesAndLeviesPage;
