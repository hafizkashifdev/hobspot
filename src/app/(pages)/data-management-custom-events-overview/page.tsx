import { DataManagementCustomEventsOverviewImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataManagementCustomEventsOverviewPage = () => {
  return (
    <CommonPage
      pageTitle={` Overview`}
      src={DataManagementCustomEventsOverviewImage}
      backRoute="/data-management-custom-events"
    />
  );
};

export default DataManagementCustomEventsOverviewPage;
