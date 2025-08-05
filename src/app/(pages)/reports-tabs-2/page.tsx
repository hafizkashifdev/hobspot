import { ReportsTabs2Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ReportsTabs2Page = () => {
  return (
    <CommonPage
      pageTitle={`reports Tabs`}
      src={ReportsTabs2Image}
      backRoute="/reports"
    />
  );
};

export default ReportsTabs2Page;
