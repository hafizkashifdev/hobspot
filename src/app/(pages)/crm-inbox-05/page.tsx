import { CrmInbox05Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmInbox05Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Inbox 05`}
      src={CrmInbox05Image}
      backRoute="/crm-inbox"
    />
  );
};

export default CrmInbox05Page;
