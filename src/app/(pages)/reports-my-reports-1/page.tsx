import { ReportsMyReports1Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ReportsMyReports1Page = () => {
  return (
    <CommonPage
      pageTitle={`reports My Reports`}
      src={ReportsMyReports1Image}
      backRoute="/reports"
    />
  );
};

export default ReportsMyReports1Page;
