import { DashboardsViewDashboard1Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DashboardsViewDashboard1Page = () => {
  return (
    <CommonPage
      pageTitle={`Dashboards View Dashboard`}
      src={DashboardsViewDashboard1Image}
      backRoute="/dashboards"
    />
  );
};

export default DashboardsViewDashboard1Page;
