import { ReportsConfigure15Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ReportsConfigure15Page = () => {
  return (
    <CommonPage
      pageTitle={`reports Configure`}
      src={ReportsConfigure15Image}
      backRoute="/reports"
    />
  );
};

export default ReportsConfigure15Page;
