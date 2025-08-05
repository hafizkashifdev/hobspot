import { CreateSurveyPreviewImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreateSurveyPreviewPage = () => {
  return (
    <CommonPage
      pageTitle={`Create  Survey _ Preview`}
      src={CreateSurveyPreviewImage}
      backRoute="/surveys-main"
    />
  );
};

export default CreateSurveyPreviewPage;
