import { CrmCompanies06Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmCompanies06Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Companies 06`}
      src={CrmCompanies06Image}
      backRoute="/crm-companies"
    />
  );
};

export default CrmCompanies06Page;
