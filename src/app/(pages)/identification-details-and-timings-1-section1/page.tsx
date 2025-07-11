import { IdentificationDetailsAndTimings1Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IdentificationDetailsAndTimings1Page = () => {
  return (
    <CommonPage
      pageTitle="Identification details and timings"
      src={IdentificationDetailsAndTimings1Image}
      backRoute="/semi"
    />
  );
};

export default IdentificationDetailsAndTimings1Page;
