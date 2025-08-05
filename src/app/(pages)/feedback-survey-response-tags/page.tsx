import { FeedbackSurveyResponseTagsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const FeedbackSurveyResponseTagsPage = () => {
  return (
    <CommonPage
      pageTitle={`Feedback Survey _ Response Tags`}
      src={FeedbackSurveyResponseTagsImage}
      backRoute="/surveys-main"
    />
  );
};

export default FeedbackSurveyResponseTagsPage;
