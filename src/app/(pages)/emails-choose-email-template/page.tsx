import { EmailsChooseEmailTemplateImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const EmailsChooseEmailTemplatePage = () => {
  return (
    <CommonPage
      pageTitle={`Choose Email Template   `}
      src={EmailsChooseEmailTemplateImage}
      backRoute="/emails"
    />
  );
};

export default EmailsChooseEmailTemplatePage;
