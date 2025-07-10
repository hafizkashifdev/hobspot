import { ProgrammeOfOperationsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ProgrammeOfOperationsPage = () => {
  return (
    <CommonPage
      pageTitle={`Programme Of Operations`}
      src={ProgrammeOfOperationsImage}
      backRoute="/pisp_spi"
    />
  );
};

export default ProgrammeOfOperationsPage;
