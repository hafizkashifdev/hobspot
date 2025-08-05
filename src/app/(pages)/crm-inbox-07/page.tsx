import { CrmInbox07Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmInbox07Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Inbox 07`}
      src={CrmInbox07Image}
      backRoute="/crm-inbox"
    />
  );
};

export default CrmInbox07Page;
