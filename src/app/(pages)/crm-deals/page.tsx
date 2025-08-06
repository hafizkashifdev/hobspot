import { CrmDealsImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "CRM Deals 1",
    title: "CRM Deals 1",
    href: "/crm-deals-01",
    coords: "37,46,482,96",
    shape: "rect",
  },
  {
    alt: "CRM Deals 2",
    title: "CRM Deals 2",
    href: "/crm-deals-02",
    coords: "60,294,701,353",
    shape: "rect",
  },
  {
    alt: "CRM Deals 3",
    title: "CRM Deals 3",
    href: "/crm-deals-03",
    coords: "66,633,757,679",
    shape: "rect",
  },
  {
    alt: "CRM Deals 4",
    title: "CRM Deals 4",
    href: "/crm-deals-04",
    coords: "29,944,223,1006",
    shape: "rect",
  },
  {
    alt: "CRM Deals 5",
    title: "CRM Deals 5",
    href: "/crm-deals-05",
    coords: "29,1264,278,1316",
    shape: "rect",
  },
  {
    alt: "CRM Deals 6",
    title: "CRM Deals 6",
    href: "/crm-deals-06",
    coords: "30,1804,203,1853",
    shape: "rect",
  },
  {
    alt: "CRM Deals 11",
    title: "CRM Deals 11",
    href: "/crm-deals-11",
    coords: "25,2114,187,2178",
    shape: "rect",
  },
  {
    alt: "CRM Deals 7",
    title: "CRM Deals 7",
    href: "/crm-deals-07",
    coords: "27,2434,255,2487",
    shape: "rect",
  },
  {
    alt: "CRM Deals 8",
    title: "CRM Deals 8",
    href: "/crm-deals-08",
    coords: "42,2524,360,2576",
    shape: "rect",
  },
  {
    alt: "CRM Deals 9",
    title: "CRM Deals 9",
    href: "/crm-deals-09",
    coords: "606,2522,900,2571",
    shape: "rect",
  },
  {
    alt: "CRM Deals 10",
    title: "CRM Deals 10",
    href: "/crm-deals-10",
    coords: "615,2766,951,2821",
    shape: "rect",
  },
];

const CrmDealsPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`CRM Deals`}
      image={CrmDealsImage}
      backRoute="/hubspot-crm"
      areas={areas}
    />
  );
};

export default CrmDealsPage;
