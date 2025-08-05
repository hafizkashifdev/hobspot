import { ReportsDataSourceContactsDealsCompaniesLeads21Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ReportsDataSourceContactsDealsCompaniesLeads21Page = () => {
  return (
    <CommonPage
      pageTitle={`reports Data Source (Contacts, Deals, Companies, leads)`}
      src={ReportsDataSourceContactsDealsCompaniesLeads21Image}
      backRoute="/reports"
    />
  );
};

export default ReportsDataSourceContactsDealsCompaniesLeads21Page;
