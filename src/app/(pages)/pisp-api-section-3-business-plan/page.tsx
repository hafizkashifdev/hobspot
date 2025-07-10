import { PispApiSection3BusinessPlanImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PispApiSection3BusinessPlanPage = () => {
  return (
    <CommonPage
      pageTitle={"Section 3:  Business Plan "}
      src={PispApiSection3BusinessPlanImage}
      backRoute="/pisp-api"
    />
  );
};

export default PispApiSection3BusinessPlanPage;
