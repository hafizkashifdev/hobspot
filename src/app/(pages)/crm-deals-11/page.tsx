import { CrmDeals11Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmDeals11Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Deals 11`}
      src={CrmDeals11Image}
      backRoute="/crm-deals"
    />
  );
};

export default CrmDeals11Page;
