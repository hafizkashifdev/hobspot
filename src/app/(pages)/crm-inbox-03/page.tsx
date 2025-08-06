import { CrmInbox03Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmInbox03Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Inbox 03`}
      src={CrmInbox03Image}
      backRoute="/crm-inbox"
    />
  );
};

export default CrmInbox03Page;
