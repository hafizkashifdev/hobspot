import { CrmCompanies05Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmCompanies05Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Companies 05`}
      src={CrmCompanies05Image}
      backRoute="/crm-companies"
    />
  );
};

export default CrmCompanies05Page;
