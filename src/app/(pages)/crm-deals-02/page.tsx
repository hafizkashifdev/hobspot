import { CrmDeals02Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmDeals02Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Deals 02`}
      src={CrmDeals02Image}
      backRoute="/crm-deals"
    />
  );
};

export default CrmDeals02Page;
