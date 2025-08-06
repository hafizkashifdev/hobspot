"use client";

import { DataManagementDataModelImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "Overview",
    title: "Overview",
    href: "/data-management-data-model-overview",
    coords: "24,39,246,101",
    shape: "rect"
  },
  {
    alt: "All Objects Details",
    title: "All Objects Details",
    href: "/data-management-data-model-overview-all-objects-details",
    coords: "48,127,386,198",
    shape: "rect"
  },
  {
    alt: "View Details",
    title: "View Details",
    href: "/data-management-data-model-overview-all-objects-details-view-details",
    coords: "68,390,345,451",
    shape: "rect"
  },
  {
    alt: "Usage",
    title: "Usage",
    href: "/data-management-data-model-overview-all-objects-details-view-details-usage",
    coords: "97,467,309,526",
    shape: "rect"
  },
  {
    alt: "Properties",
    title: "Properties",
    href: "/data-management-data-model-overview-all-objects-details-view-details-properties",
    coords: "817,472,1096,524",
    shape: "rect"
  },
  {
    alt: "Associations",
    title: "Associations",
    href: "/data-management-data-model-overview-all-objects-details-view-details-associations",
    coords: "87,775,375,839",
    shape: "rect"
  },
  {
    alt: "Used In",
    title: "Used In",
    href: "/data-management-data-model-overview-all-objects-details-view-details-used-in",
    coords: "933,782,1162,842",
    shape: "rect"
  },
  {
    alt: "Limits",
    title: "Limits",
    href: "/data-management-data-model-limits",
    coords: "29,1211,220,1263",
    shape: "rect"
  },
  {
    alt: "Record Limits",
    title: "Record Limits",
    href: "/data-management-data-model-limits-record-limits",
    coords: "51,1298,332,1358",
    shape: "rect"
  },
  {
    alt: "Objects",
    title: "Objects",
    href: "/data-management-data-model-limits-record-limits-objects",
    coords: "69,1388,285,1440",
    shape: "rect"
  },
  {
    alt: "HubSpot Defined Objects",
    title: "HubSpot Defined Objects",
    href: "/data-management-data-model-limits-record-limits-objects-hubspot-defined-objects",
    coords: "381,1414,853,1463",
    shape: "rect"
  },
  {
    alt: "Associations",
    title: "Associations",
    href: "/data-management-data-model-limits-record-limits-associations",
    coords: "1142,1379,1405,1433",
    shape: "rect"
  },
  {
    alt: "Definition Limits",
    title: "Definition Limits",
    href: "/data-management-data-model-limits-definition-limits",
    coords: "60,1737,370,1792",
    shape: "rect"
  },
  {
    alt: "Properties",
    title: "Properties",
    href: "/data-management-data-model-limits-definition-limits-pipelines",
    coords: "66,1823,326,1872",
    shape: "rect"
  },
  {
    alt: "Association Labels",
    title: "Association Labels",
    href: "/data-management-data-model-limits-definition-limits-association-labels",
    coords: "814,1812,1188,1867",
    shape: "rect"
  },
  {
    alt: "Pipelines",
    title: "Pipelines",
    href: "/data-management-data-model-limits-definition-limits-pipelines",
    coords: "66,2129,304,2191",
    shape: "rect"
  },
  {
    alt: "Custom objects",
    title: "Custom objects",
    href: "/data-management-data-model-limits-definition-limits-custom-objects",
    coords: "1065,2129,1402,2189",
    shape: "rect"
  },
  {
    alt: "Analysis",
    title: "Analysis",
    href: "/data-management-data-model-analysis",
    coords: "28,2519,242,2576",
    shape: "rect"
  },
  {
    alt: "CRM Graph",
    title: "CRM Graph",
    href: "/data-management-data-model-analysis-crm-graph",
    coords: "43,2592,296,2658",
    shape: "rect"
  },
  {
    alt: "Grid Details",
    title: "Grid Details",
    href: "/data-management-data-model-analysis-grid-details",
    coords: "780,2594,1033,2653",
    shape: "rect"
  }
];

const DataManagementDataModelPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Data Model`}
      image={DataManagementDataModelImage}
      backRoute="/hubspot-data-management"
      areas={areas}
    />
  );
};

export default DataManagementDataModelPage;
