import { DataManagementCustomEventsCreateEventImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DataManagementCustomEventsCreateEventPage = () => {
  return (
    <CommonPage
      pageTitle={`Create Event`}
      src={DataManagementCustomEventsCreateEventImage}
      backRoute="/data-management-custom-events"
    />
  );
};

export default DataManagementCustomEventsCreateEventPage;
