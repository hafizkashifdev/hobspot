import { Chap1AmendmentComparisonImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Chap1AmendmentComparisonPage = () => {
  return (
    <CommonPage
      pageTitle={`Mental Health / Mental Health Act 1983 / Chap 1 Amendment Comparison     `}
      src={Chap1AmendmentComparisonImage}
      backRoute="/remands-to-hospital"
    />
  );
};

export default Chap1AmendmentComparisonPage;
