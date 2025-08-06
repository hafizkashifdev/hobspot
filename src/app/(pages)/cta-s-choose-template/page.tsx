import { CtaSChooseTemplateImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CtaSChooseTemplatePage = () => {
  return (
    <CommonPage
      pageTitle={`Choose Template`}
      src={CtaSChooseTemplateImage}
      backRoute="/ctas"
    />
  );
};

export default CtaSChooseTemplatePage;
