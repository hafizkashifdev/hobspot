import { CrmInbox06Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmInbox06Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Inbox 06`}
      src={CrmInbox06Image}
      backRoute="/crm-inbox"
    />
  );
};

export default CrmInbox06Page;
