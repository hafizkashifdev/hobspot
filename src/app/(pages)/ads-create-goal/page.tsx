import { AdsCreateGoalImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AdsCreateGoalPage = () => {
  return (
    <CommonPage
      pageTitle={`Create Goal`}
      src={AdsCreateGoalImage}
      backRoute="/ads"
    />
  );
};

export default AdsCreateGoalPage;
