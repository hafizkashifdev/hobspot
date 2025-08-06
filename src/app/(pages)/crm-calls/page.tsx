import { CrmCallsImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "CRM Calls 1",
    title: "CRM Calls 1",
    href: "/crm-calls-01",
    coords: "29,44,301,91",
    shape: "rect",
  },
  {
    alt: "CRM Calls 2",
    title: "CRM Calls 2",
    href: "/crm-calls-02",
    coords: "61,299,688,353",
    shape: "rect",
  },
  {
    alt: "CRM Calls 3",
    title: "CRM Calls 3",
    href: "/crm-calls-03",
    coords: "35,630,298,686",
    shape: "rect",
  },
  {
    alt: "CRM Calls 4",
    title: "CRM Calls 4",
    href: "/crm-calls-04",
    coords: "29,1203,189,1252",
    shape: "rect",
  },
  {
    alt: "CRM Calls 9",
    title: "CRM Calls 9",
    href: "/crm-calls-09",
    coords: "32,1513,200,1574",
    shape: "rect",
  },
  {
    alt: "CRM Calls 5",
    title: "CRM Calls 5",
    href: "/crm-calls-05",
    coords: "33,1829,241,1879",
    shape: "rect",
  },
  {
    alt: "CRM Calls 6",
    title: "CRM Calls 6",
    href: "/crm-calls-06",
    coords: "48,1925,345,1985",
    shape: "rect",
  },
  {
    alt: "CRM Calls 7",
    title: "CRM Calls 7",
    href: "/crm-calls-07",
    coords: "611,1920,894,1977",
    shape: "rect",
  },
  {
    alt: "CRM Calls 8",
    title: "CRM Calls 8",
    href: "/crm-calls-08",
    coords: "615,2171,931,2224",
    shape: "rect",
  },
];

const CrmCallsPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`CRM Calls`}
      image={CrmCallsImage}
      backRoute="/hubspot-crm"
      areas={areas}
    />
  );
};

export default CrmCallsPage;
