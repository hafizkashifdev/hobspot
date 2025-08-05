import { ReportsSingleObject9Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ReportsSingleObject9Page = () => {
  return (
    <CommonPage
      pageTitle={`reports Single object`}
      src={ReportsSingleObject9Image}
      backRoute="/reports"
    />
  );
};

export default ReportsSingleObject9Page;
