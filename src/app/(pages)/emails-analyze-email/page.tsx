import { EmailsAnalyzeEmailImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const EmailsAnalyzeEmailPage = () => {
  return (
    <CommonPage
      pageTitle={`Analyze Email    `}
      src={EmailsAnalyzeEmailImage}
      backRoute="/emails"
    />
  );
};

export default EmailsAnalyzeEmailPage;
