import { Chap6AmendmentComparisonImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Chap6AmendmentComparisonPage = () => {
  return (
    <CommonPage
      pageTitle={`Mental Health / Mental Health Act 1983 / Chap 6 Amendment Comparison      `}
      src={Chap6AmendmentComparisonImage}
      backRoute="/transfer-to-hospital-of-prisoners-etc"
    />
  );
};

export default Chap6AmendmentComparisonPage;
