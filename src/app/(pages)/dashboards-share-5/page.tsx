import { DashboardsShare5Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DashboardsShare5Page = () => {
  return (
    <CommonPage
      pageTitle={`Dashboards Share`}
      src={DashboardsShare5Image}
      backRoute="/dashboards"
    />
  );
};

export default DashboardsShare5Page;
