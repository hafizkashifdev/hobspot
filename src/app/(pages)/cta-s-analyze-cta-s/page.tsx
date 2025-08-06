import { CtaSAnalyzeCtaSImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CtaSAnalyzeCtaSPage = () => {
  return (
    <CommonPage
      pageTitle={`Analyze CTA’s`}
      src={CtaSAnalyzeCtaSImage}
      backRoute="/ctas"
    />
  );
};

export default CtaSAnalyzeCtaSPage;
