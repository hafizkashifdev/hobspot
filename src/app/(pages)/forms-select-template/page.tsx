import { FormsSelectTemplateImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const FormsSelectTemplatePage = () => {
  return (
    <CommonPage
      pageTitle={`FORMS Select Template`}
      src={FormsSelectTemplateImage}
      backRoute="/forms"
    />
  );
};

export default FormsSelectTemplatePage;
