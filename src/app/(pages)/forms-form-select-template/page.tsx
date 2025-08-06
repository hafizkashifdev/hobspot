import { FormsFormSelectTemplateImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const FormsFormSelectTemplatePage = () => {
  return (
    <CommonPage
      pageTitle={`Form Select Template `}
      src={FormsFormSelectTemplateImage}
      backRoute="/forms"
    />
  );
};

export default FormsFormSelectTemplatePage;
