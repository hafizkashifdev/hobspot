import { PispApiBusinessContinuityArrangementsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PispApiBusinessContinuityArrangementsPage = () => {
  return (
    <CommonPage
      pageTitle={"Business continuity arrangements"}
      src={PispApiBusinessContinuityArrangementsImage}
      backRoute="/pisp-api"
    />
  );
};

export default PispApiBusinessContinuityArrangementsPage;
