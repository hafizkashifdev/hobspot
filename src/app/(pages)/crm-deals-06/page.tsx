import { CrmDeals06Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmDeals06Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Deals 06`}
      src={CrmDeals06Image}
      backRoute="/crm-deals"
    />
  );
};

export default CrmDeals06Page;
