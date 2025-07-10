import { PispApiSection18FeesAndLeviesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PispApiSection18FeesAndLeviesPage = () => {
  return (
    <CommonPage
      pageTitle={"Fees and levies"}
      src={PispApiSection18FeesAndLeviesImage}
      backRoute="/pisp-api"
    />
  );
};

export default PispApiSection18FeesAndLeviesPage;
