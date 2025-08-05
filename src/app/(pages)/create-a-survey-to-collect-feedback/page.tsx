import { CreateASurveyToCollectFeedbackImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreateASurveyToCollectFeedbackPage = () => {
  return (
    <CommonPage
      pageTitle={`Create a Survey to Collect Feedback`}
      src={CreateASurveyToCollectFeedbackImage}
      backRoute="/surveys-main"
    />
  );
};

export default CreateASurveyToCollectFeedbackPage;
