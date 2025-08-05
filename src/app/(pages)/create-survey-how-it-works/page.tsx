import { CreateSurveyHowItWorksImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreateSurveyHowItWorksPage = () => {
  return (
    <CommonPage
      pageTitle={`Create  Survey _ How it works`}
      src={CreateSurveyHowItWorksImage}
      backRoute="/surveys-main"
    />
  );
};

export default CreateSurveyHowItWorksPage;
