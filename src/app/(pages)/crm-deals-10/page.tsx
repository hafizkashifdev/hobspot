import { CrmDeals10Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmDeals10Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Deals 10`}
      src={CrmDeals10Image}
      backRoute="/crm-deals"
    />
  );
};

export default CrmDeals10Page;
