import { CustomiseSurveyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CustomiseSurveyPage = () => {
  return (
    <CommonPage
      pageTitle={`Customise _ Survey`}
      src={CustomiseSurveyImage}
      backRoute="/surveys-main"
    />
  );
};

export default CustomiseSurveyPage;
