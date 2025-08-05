import { FeedbackSurveyManageImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const FeedbackSurveyManagePage = () => {
  return (
    <CommonPage
      pageTitle={`Feedback Survey _ Manage`}
      src={FeedbackSurveyManageImage}
      backRoute="/surveys-main"
    />
  );
};

export default FeedbackSurveyManagePage;
