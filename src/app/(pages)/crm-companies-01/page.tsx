import { CrmCompanies01Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmCompanies01Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Companies 01`}
      src={CrmCompanies01Image}
      backRoute="/crm-companies"
    />
  );
};

export default CrmCompanies01Page;
