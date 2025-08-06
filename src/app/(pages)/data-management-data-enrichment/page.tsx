import { DataManagementDataEnrichmentImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "Data Enrichment Setting",
    title: "Data Enrichment Setting",
    href: "/data-management-data-enrichment-settings",
    coords: "40,38,231,101",
    shape: "rect"
  },
  {
    alt: "Data Enrichment Tools",
    title: "Data Enrichment Tools",
    href: "/data-management-data-enrichment-tools",
    coords: "1000,38,1152,100",
    shape: "rect"
  }
];


const DataManagementDataEnrichmentPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Data Enrichment`}
      image={DataManagementDataEnrichmentImage}
      backRoute="/hubspot-data-management"
      areas={areas}
    />
  );
};

export default DataManagementDataEnrichmentPage;
