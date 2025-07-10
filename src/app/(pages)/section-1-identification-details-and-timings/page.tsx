import { Section1IdentificationDetailsAndTimingsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Section1IdentificationDetailsAndTimingsPage = () => {
  return (
    <CommonPage
      pageTitle={`Section 1: Identification Details and Timings`}
      src={Section1IdentificationDetailsAndTimingsImage}
      backRoute="/raisp-registration-account-information-service-provider"
    />
  );
};

export default Section1IdentificationDetailsAndTimingsPage;
