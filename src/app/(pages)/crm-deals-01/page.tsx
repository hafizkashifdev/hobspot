import { CrmDeals01Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmDeals01Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Deals 01`}
      src={CrmDeals01Image}
      backRoute="/crm-deals"
    />
  );
};

export default CrmDeals01Page;
