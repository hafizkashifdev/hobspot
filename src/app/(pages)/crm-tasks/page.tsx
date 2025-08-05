import { CrmTasksImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "CRM Tasks 1",
    title: "CRM Tasks 1",
    href: "/crm-tasks-01",
    coords: "25,34,321,96",
    shape: "rect",
  },
  {
    alt: "CRM Tasks 2",
    title: "CRM Tasks 2",
    href: "/crm-tasks-02",
    coords: "58,294,221,349",
    shape: "rect",
  },
  {
    alt: "CRM Tasks 3",
    title: "CRM Tasks 3",
    href: "/crm-tasks-03",
    coords: "27,637,260,684",
    shape: "rect",
  },
  {
    alt: "CRM Tasks 4",
    title: "CRM Tasks 4",
    href: "/crm-tasks-04",
    coords: "29,1206,180,1253",
    shape: "rect",
  },
  {
    alt: "CRM Tasks 9",
    title: "CRM Tasks 9",
    href: "/crm-tasks-09",
    coords: "27,1519,185,1577",
    shape: "rect",
  },
  {
    alt: "CRM Tasks 10",
    title: "CRM Tasks 10",
    href: "/crm-tasks-10",
    coords: "30,1834,326,1883",
    shape: "rect",
  },
  {
    alt: "CRM Tasks 5",
    title: "CRM Tasks 5",
    href: "/crm-tasks-05",
    coords: "29,2154,269,2200",
    shape: "rect",
  },
  {
    alt: "CRM Tasks 6",
    title: "CRM Tasks 6",
    href: "/crm-tasks-06",
    coords: "48,2238,353,2290",
    shape: "rect",
  },
  {
    alt: "CRM Tasks 7",
    title: "CRM Tasks 7",
    href: "/crm-tasks-07",
    coords: "605,2241,891,2295",
    shape: "rect",
  },
  {
    alt: "CRM Tasks 8",
    title: "CRM Tasks 8",
    href: "/crm-tasks-08",
    coords: "613,2487,931,2541",
    shape: "rect",
  },
];
const CrmTasksPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`CRM Tasks`}
      image={CrmTasksImage}
      backRoute="/hubspot-crm"
      areas={areas}
    />
  );
};

export default CrmTasksPage;
