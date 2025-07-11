import { BusinessPlanImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const BusinessPlanPage = () => {
  return (
    <CommonPage
      pageTitle=" Business plan"
      src={BusinessPlanImage}
      backRoute="/semi"
    />
  );
};

export default BusinessPlanPage;
