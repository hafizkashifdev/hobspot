import { CrmDeals09Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmDeals09Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Deals 09`}
      src={CrmDeals09Image}
      backRoute="/crm-deals"
    />
  );
};

export default CrmDeals09Page;
