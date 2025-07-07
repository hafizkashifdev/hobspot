import { Chap3AmendmentComparisonImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Chap3AmendmentComparisonPage = () => {
  return (
    <CommonPage
      pageTitle={`Mental Health / Mental Health Act 1983 / Chap 3 Amendment Comparison      `}
      src={Chap3AmendmentComparisonImage}
      backRoute="/restriction-orders"
    />
  );
};

export default Chap3AmendmentComparisonPage;
