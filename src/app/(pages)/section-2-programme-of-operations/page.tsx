import { Section2ProgrammeOfOperationsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Section2ProgrammeOfOperationsPage = () => {
  return (
    <CommonPage
      pageTitle={`Section 2: Programme of operations`}
      src={Section2ProgrammeOfOperationsImage}
      backRoute="/raisp-registration-account-information-service-provider"
    />
  );
};

export default Section2ProgrammeOfOperationsPage;
