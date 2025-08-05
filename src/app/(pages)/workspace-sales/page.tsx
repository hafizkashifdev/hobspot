import { WorkspaceSalesImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "Workspace _ Sales",
    title: "Workspace _ Sales",
    href: "/1-hubspot-workspace-sales",
    coords: "28,33,651,98",
    shape: "rect",
  },
];

const WorkspaceSalesPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Workspace _ Sales`}
      image={WorkspaceSalesImage}
      backRoute="/hubspot-workspace"
      areas={areas}
    />
  );
};

export default WorkspaceSalesPage;
