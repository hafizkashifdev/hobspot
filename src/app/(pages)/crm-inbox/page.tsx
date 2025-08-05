import { CrmInboxImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "CRM Inbox 1",
    title: "CRM Inbox 1",
    href: "/crm-inbox-01",
    coords: "37,44,567,95",
    shape: "rect",
  },
  {
    alt: "CRM Inbox 3",
    title: "CRM Inbox 3",
    href: "/crm-inbox-03",
    coords: "42,511,402,570",
    shape: "rect",
  },
  {
    alt: "CRM Inbox 5",
    title: "CRM Inbox 5",
    href: "/crm-inbox-05",
    coords: "58,604,912,664",
    shape: "rect",
  },
  {
    alt: "CRM Inbox 7",
    title: "CRM Inbox 7",
    href: "/crm-inbox-07",
    coords: "58,913,491,965",
    shape: "rect",
  },
  {
    alt: "CRM Inbox 2",
    title: "CRM Inbox 2",
    href: "/crm-inbox-02",
    coords: "81,1001,716,1053",
    shape: "rect",
  },
  {
    alt: "CRM Inbox 4",
    title: "CRM Inbox 4",
    href: "/crm-inbox-04",
    coords: "817,1002,1259,1053",
    shape: "rect",
  },
  {
    alt: "CRM Inbox 6",
    title: "CRM Inbox 6",
    href: "/crm-inbox-06",
    coords: "78,1272,752,1326",
    shape: "rect",
  },
  {
    alt: "CRM Inbox 8",
    title: "CRM Inbox 8",
    href: "/crm-inbox-08",
    coords: "37,1597,304,1660",
    shape: "rect",
  },
];
const CrmInboxPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`CRM Inbox`}
      image={CrmInboxImage}
      backRoute="/hubspot-crm"
      areas={areas}
    />
  );
};

export default CrmInboxPage;
