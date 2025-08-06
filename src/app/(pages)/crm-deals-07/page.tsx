import { CrmDeals07Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmDeals07Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Deals 07`}
      src={CrmDeals07Image}
      backRoute="/crm-deals"
    />
  );
};

export default CrmDeals07Page;
