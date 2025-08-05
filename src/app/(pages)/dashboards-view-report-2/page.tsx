import { DashboardsViewReport2Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DashboardsViewReport2Page = () => {
  return (
    <CommonPage
      pageTitle={`Dashboards View Report`}
      src={DashboardsViewReport2Image}
      backRoute="/dashboards"
    />
  );
};

export default DashboardsViewReport2Page;
