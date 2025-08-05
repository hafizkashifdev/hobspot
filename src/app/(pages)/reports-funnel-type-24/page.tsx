import { ReportsFunnelType24Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ReportsFunnelType24Page = () => {
  return (
    <CommonPage
      pageTitle={`reports Funnel Type`}
      src={ReportsFunnelType24Image}
      backRoute="/reports"
    />
  );
};

export default ReportsFunnelType24Page;
