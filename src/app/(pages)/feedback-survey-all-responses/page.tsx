import { FeedbackSurveyAllResponsesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const FeedbackSurveyAllResponsesPage = () => {
  return (
    <CommonPage
      pageTitle={`Feedback Survey _ All Responses`}
      src={FeedbackSurveyAllResponsesImage}
      backRoute="/surveys-main"
    />
  );
};

export default FeedbackSurveyAllResponsesPage;
