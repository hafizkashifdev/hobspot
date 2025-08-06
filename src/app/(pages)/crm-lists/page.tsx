import { CrmListsImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "CRM Lists 1",
    title: "CRM Lists 1",
    href: "/crm-lists-01",
    coords: "1,1,107,51",
    shape: "rect",
  },
  {
    alt: "CRM Lists 2",
    title: "CRM Lists 2",
    href: "/crm-lists-02",
    coords: "73,142,603,193",
    shape: "rect",
  },
  {
    alt: "CRM Lists 3",
    title: "CRM Lists 3",
    href: "/crm-lists-03",
    coords: "69,460,633,514",
    shape: "rect",
  },
  {
    alt: "CRM Lists 4",
    title: "CRM Lists 4",
    href: "/crm-lists-04",
    coords: "60,824,277,880",
    shape: "rect",
  },
  {
    alt: "CRM Lists 5",
    title: "CRM Lists 5",
    href: "/crm-lists-05",
    coords: "66,1131,768,1182",
    shape: "rect",
  },
  {
    alt: "CRM Lists 6",
    title: "CRM Lists 6",
    href: "/crm-lists-06",
    coords: "64,1815,290,1869",
    shape: "rect",
  },
  {
    alt: "CRM Lists 7",
    title: "CRM Lists 7",
    href: "/crm-lists-07",
    coords: "61,2519,241,2578",
    shape: "rect",
  },
  {
    alt: "CRM Lists 8",
    title: "CRM Lists 8",
    href: "/crm-lists-08",
    coords: "79,2610,384,2664",
    shape: "rect",
  },
  {
    alt: "CRM Lists 9",
    title: "CRM Lists 9",
    href: "/crm-lists-09",
    coords: "651,2612,930,2666",
    shape: "rect",
  },
  {
    alt: "CRM Lists 10",
    title: "CRM Lists 10",
    href: "/crm-lists-10",
    coords: "652,2855,977,2912",
    shape: "rect",
  },
];

const CrmListsPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`CRM Lists`}
      image={CrmListsImage}
      backRoute="/hubspot-crm"
      areas={areas}
    />
  );
};

export default CrmListsPage;
