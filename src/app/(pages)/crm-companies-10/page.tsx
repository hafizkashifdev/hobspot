import { CrmCompanies10Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmCompanies10Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Companies 10`}
      src={CrmCompanies10Image}
      backRoute="/crm-companies"
    />
  );
};

export default CrmCompanies10Page;
