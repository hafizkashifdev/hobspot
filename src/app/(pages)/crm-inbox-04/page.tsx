import { CrmInbox04Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmInbox04Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Inbox 04`}
      src={CrmInbox04Image}
      backRoute="/crm-inbox"
    />
  );
};

export default CrmInbox04Page;
