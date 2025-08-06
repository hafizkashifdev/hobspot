import { CrmCompaniesImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "CRM Companies 1",
    title: "CRM Companies 1",
    href: "/crm-companies-01",
    coords: "399,93,33,40",
    shape: "rect",
  },
  {
    alt: "CRM Companies 2",
    title: "CRM Companies 2",
    href: "/crm-companies-02",
    coords: "64,300,683,343",
    shape: "rect",
  },
  {
    alt: "CRM Companies 3",
    title: "CRM Companies 3",
    href: "/crm-companies-03",
    coords: "61,629,757,681",
    shape: "rect",
  },
  {
    alt: "CRM Companies 4",
    title: "CRM Companies 4",
    href: "/crm-companies-04",
    coords: "32,952,220,999",
    shape: "rect",
  },
  {
    alt: "CRM Companies 5",
    title: "CRM Companies 5",
    href: "/crm-companies-05",
    coords: "342,953,669,1007",
    shape: "rect",
  },
  {
    alt: "CRM Companies 6",
    title: "CRM Companies 6",
    href: "/crm-companies-06",
    coords: "30,1802,192,1856",
    shape: "rect",
  },
  {
    alt: "CRM Companies 11",
    title: "CRM Companies 11",
    href: "/crm-companies-11",
    coords: "30,2121,193,2173",
    shape: "rect",
  },
  {
    alt: "CRM Companies 7",
    title: "CRM Companies 7",
    href: "/crm-companies-07",
    coords: "33,2438,241,2483",
    shape: "rect",
  },
  {
    alt: "CRM Companies 8",
    title: "CRM Companies 8",
    href: "/crm-companies-08",
    coords: "48,2521,355,2578",
    shape: "rect",
  },
  {
    alt: "CRM Companies 9",
    title: "CRM Companies 9",
    href: "/crm-companies-09",
    coords: "613,2519,902,2575",
    shape: "rect",
  },
  {
    alt: "CRM Companies 10",
    title: "CRM Companies 10",
    href: "/crm-companies-10",
    coords: "615,2767,944,2820",
    shape: "rect",
  },
];

const CrmCompaniesPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`CRM Companies`}
      image={CrmCompaniesImage}
      backRoute="/hubspot-crm"
      areas={areas}
    />
  );
};

export default CrmCompaniesPage;
