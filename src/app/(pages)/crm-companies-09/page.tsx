import { CrmCompanies09Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmCompanies09Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Companies 09`}
      src={CrmCompanies09Image}
      backRoute="/crm-companies"
    />
  );
};

export default CrmCompanies09Page;
