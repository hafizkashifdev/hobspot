import { CrmCompanies02Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmCompanies02Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Companies 02`}
      src={CrmCompanies02Image}
      backRoute="/crm-companies"
    />
  );
};

export default CrmCompanies02Page;
