import { Section3BusinessPlanImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Section3BusinessPlanPage = () => {
  return (
    <CommonPage
      pageTitle={`Section 3: Business Plan`}
      src={Section3BusinessPlanImage}
      backRoute="/raisp-registration-account-information-service-provider"
    />
  );
};

export default Section3BusinessPlanPage;
