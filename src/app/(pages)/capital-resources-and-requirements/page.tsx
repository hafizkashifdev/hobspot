import { CapitalResourcesAndRequirementsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CapitalResourcesAndRequirementsPage = () => {
  return (
    <CommonPage
      pageTitle="Capital resources and requirements"
      src={CapitalResourcesAndRequirementsImage}
      backRoute="/semi"
    />
  );
};

export default CapitalResourcesAndRequirementsPage;
