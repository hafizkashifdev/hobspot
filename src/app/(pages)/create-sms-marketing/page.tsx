import { CreateSmsMarketingImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreateSmsMarketingPage = () => {
  return (
    <CommonPage
      pageTitle={`SMS Marketing`}
      src={CreateSmsMarketingImage}
      backRoute="/sms-marketing"
    />
  );
};

export default CreateSmsMarketingPage;
