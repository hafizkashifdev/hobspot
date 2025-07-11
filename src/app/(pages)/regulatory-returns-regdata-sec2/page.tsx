import { RegulatoryReturnsRegdataSec2Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const RegulatoryReturnsRegdataSec2Page = () => {
  return (
    <CommonPage
      pageTitle="Regulatory returns – RegData "
      src={RegulatoryReturnsRegdataSec2Image}
      backRoute="/fca-application-e-money-new-authorisation-registration-aemi"
    />
  );
};

export default RegulatoryReturnsRegdataSec2Page;
