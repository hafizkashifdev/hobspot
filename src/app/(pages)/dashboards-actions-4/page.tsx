import { DashboardsActions4Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DashboardsActions4Page = () => {
  return (
    <CommonPage
      pageTitle={`Dashboards Actions`}
      src={DashboardsActions4Image}
      backRoute="/dashboards"
    />
  );
};

export default DashboardsActions4Page;
