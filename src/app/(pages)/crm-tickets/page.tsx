import { CrmTicketsImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "CRM Tickets 1",
    title: "CRM Tickets 1",
    href: "/crm-tickets-01",
    coords: "29,39,510,101",
    shape: "rect",
  },
  {
    alt: "CRM Tickets 2",
    title: "CRM Tickets 2",
    href: "/crm-tickets-02",
    coords: "60,297,696,343",
    shape: "rect",
  },
  {
    alt: "CRM Tickets 3",
    title: "CRM Tickets 3",
    href: "/crm-tickets-03",
    coords: "60,635,747,681",
    shape: "rect",
  },
  {
    alt: "CRM Tickets 4",
    title: "CRM Tickets 4",
    href: "/crm-tickets-04",
    coords: "32,953,228,996",
    shape: "rect",
  },
  {
    alt: "CRM Tickets 5",
    title: "CRM Tickets 5",
    href: "/crm-tickets-05",
    coords: "339,949,685,999",
    shape: "rect",
  },
  {
    alt: "CRM Tickets 6",
    title: "CRM Tickets 6",
    href: "/crm-tickets-06",
    coords: "30,1802,200,1866",
    shape: "rect",
  },
  {
    alt: "CRM Tickets 11",
    title: "CRM Tickets 11",
    href: "/crm-tickets-11",
    coords: "22,2119,205,2171",
    shape: "rect",
  },
  {
    alt: "CRM Tickets 7",
    title: "CRM Tickets 7",
    href: "/crm-tickets-07",
    coords: "37,2436,259,2490",
    shape: "rect",
  },
  {
    alt: "CRM Tickets 8",
    title: "CRM Tickets 8",
    href: "/crm-tickets-08",
    coords: "43,2518,345,2565",
    shape: "rect",
  },
  {
    alt: "CRM Tickets 9",
    title: "CRM Tickets 9",
    href: "/crm-tickets-09",
    coords: "606,2518,900,2576",
    shape: "rect",
  },
  {
    alt: "CRM Tickets 10",
    title: "CRM Tickets 10",
    href: "/crm-tickets-10",
    coords: "608,2766,946,2815",
    shape: "rect",
  },
];

const CrmTicketsPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`CRM Tickets`}
      image={CrmTicketsImage}
      backRoute="/hubspot-crm"
      areas={areas}
    />
  );
};

export default CrmTicketsPage;
