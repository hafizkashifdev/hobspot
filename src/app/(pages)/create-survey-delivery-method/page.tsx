import { CreateSurveyDeliveryMethodImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreateSurveyDeliveryMethodPage = () => {
  return (
    <CommonPage
      pageTitle={`Create  Survey _ Delivery Method`}
      src={CreateSurveyDeliveryMethodImage}
      backRoute="/surveys-main"
    />
  );
};

export default CreateSurveyDeliveryMethodPage;
