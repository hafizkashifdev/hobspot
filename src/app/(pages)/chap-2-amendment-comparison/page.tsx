import { Chap2AmendmentComparisonImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Chap2AmendmentComparisonPage = () => {
  return (
    <CommonPage
      pageTitle={`Mental Health / Mental Health Act 1983 / Chap 2 Amendment Comparison       `}
      src={Chap2AmendmentComparisonImage}
      backRoute="/hospital-and-guardianship-orders"
    />
  );
};

export default Chap2AmendmentComparisonPage;
