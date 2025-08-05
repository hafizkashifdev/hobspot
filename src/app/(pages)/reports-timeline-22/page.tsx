import { ReportsTimeline22Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ReportsTimeline22Page = () => {
  return (
    <CommonPage
      pageTitle={`reports Timeline`}
      src={ReportsTimeline22Image}
      backRoute="/reports"
    />
  );
};

export default ReportsTimeline22Page;
