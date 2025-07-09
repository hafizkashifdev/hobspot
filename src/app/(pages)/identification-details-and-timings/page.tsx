import { IdentificationDetailsAndTimingsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IdentificationDetailsAndTimingsPage = () => {
  return (
    <CommonPage
      pageTitle="Identification details and timings"
      src={IdentificationDetailsAndTimingsImage}
      backRoute="/semi"
    />
  );
};

export default IdentificationDetailsAndTimingsPage;
