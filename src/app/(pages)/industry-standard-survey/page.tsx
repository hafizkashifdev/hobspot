import { IndustryStandardSurveyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IndustryStandardSurveyPage = () => {
  return (
    <CommonPage
      pageTitle={`Industry Standard Survey`}
      src={IndustryStandardSurveyImage}
      backRoute="/surveys-main"
    />
  );
};

export default IndustryStandardSurveyPage;
