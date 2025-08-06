import { DataManagementCustomEventsImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "Overview",
    title: "Overview",
    href: "data-management-custom-events-overview",
    coords: "35,36,252,100",
    shape: "rect",
  },
  {
    alt: "Create Event",
    title: "Create Event",
    href: "data-management-custom-events-create-event",
    coords: "32,332,301,407",
    shape: "rect",
  },
];


const DataManagementCustomEventsPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Custom Events`}
      image={DataManagementCustomEventsImage}
      backRoute="/hubspot-data-management"
      areas={areas}
    />
  );
};

export default DataManagementCustomEventsPage;
