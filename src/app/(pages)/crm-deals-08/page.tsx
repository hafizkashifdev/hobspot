import { CrmDeals08Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmDeals08Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Deals 08`}
      src={CrmDeals08Image}
      backRoute="/crm-deals"
    />
  );
};

export default CrmDeals08Page;
