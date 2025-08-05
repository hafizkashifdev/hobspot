import { DashboardsManageDashboard3Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DashboardsManageDashboard3Page = () => {
  return (
    <CommonPage
      pageTitle={`Dashboards Manage Dashboard`}
      src={DashboardsManageDashboard3Image}
      backRoute="/dashboards"
    />
  );
};

export default DashboardsManageDashboard3Page;
