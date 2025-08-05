import { AnalyseImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AnalysePage = () => {
  return (
    <CommonPage
      pageTitle={`Analyse`}
      src={AnalyseImage}
      backRoute="/workflows-main"
    />
  );
};

export default AnalysePage;
