import { PispApiSection1IdentificationDetailsAndTimingsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PispApiSection1IdentificationDetailsAndTimingsPage = () => {
  return (
    <CommonPage
      pageTitle={"Section 1: Identification Details and Timings"}
      src={PispApiSection1IdentificationDetailsAndTimingsImage}
      backRoute="/pisp-api"
    />
  );
};

export default PispApiSection1IdentificationDetailsAndTimingsPage;
