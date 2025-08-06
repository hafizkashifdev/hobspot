import { ReportsFunnels20Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ReportsFunnels20Page = () => {
  return (
    <CommonPage
      pageTitle={`reports Funnels`}
      src={ReportsFunnels20Image}
      backRoute="/reports"
    />
  );
};

export default ReportsFunnels20Page;
