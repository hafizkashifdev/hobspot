import { PispApiSection2ProgrammeOfOperationsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PispApiSection2ProgrammeOfOperationsPage = () => {
  return (
    <CommonPage
      pageTitle={"Section 2: Programme of Operations"}
      src={PispApiSection2ProgrammeOfOperationsImage}
      backRoute="/pisp-api"
    />
  );
};

export default PispApiSection2ProgrammeOfOperationsPage;
