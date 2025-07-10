import { PispApiSection15Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PispApiSection15Page = () => {
  return (
    <CommonPage
      pageTitle={"Identity and suitability assessment of directors and persons responsible for the management of the payment institution"}
      src={PispApiSection15Image}
      backRoute="/pisp-api"
    />
  );
};

export default PispApiSection15Page;
