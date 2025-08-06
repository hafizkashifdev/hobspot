import { FormsAnalyzeFormsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const FormsAnalyzeFormsPage = () => {
  return (
    <CommonPage
      pageTitle={`Analyze Forms`}
      src={FormsAnalyzeFormsImage}
      backRoute="/forms"
    />
  );
};

export default FormsAnalyzeFormsPage;
