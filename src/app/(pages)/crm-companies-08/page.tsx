import { CrmCompanies08Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmCompanies08Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Companies 08`}
      src={CrmCompanies08Image}
      backRoute="/crm-companies"
    />
  );
};

export default CrmCompanies08Page;
