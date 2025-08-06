import { CrmCompanies03Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmCompanies03Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Companies 03`}
      src={CrmCompanies03Image}
      backRoute="/crm-companies"
    />
  );
};

export default CrmCompanies03Page;
