import { CrmDeals03Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmDeals03Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Deals 03`}
      src={CrmDeals03Image}
      backRoute="/crm-deals"
    />
  );
};

export default CrmDeals03Page;
