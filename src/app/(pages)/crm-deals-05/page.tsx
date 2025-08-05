import { CrmDeals05Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmDeals05Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Deals 05`}
      src={CrmDeals05Image}
      backRoute="/crm-deals"
    />
  );
};

export default CrmDeals05Page;
