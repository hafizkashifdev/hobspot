import { IdentificationDetailsAndTimingsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IdentificationDetailsAndTimingsPage = () => {
  return (
    <CommonPage
      pageTitle="Identification details and timings"
      src={IdentificationDetailsAndTimingsImage}
      backRoute="/fca-application-e-money-new-authorisation-registration-aemi"
    />
  );
};

export default IdentificationDetailsAndTimingsPage;
