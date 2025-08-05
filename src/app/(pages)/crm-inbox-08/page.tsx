import { CrmInbox08Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmInbox08Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Inbox 08`}
      src={CrmInbox08Image}
      backRoute="/crm-inbox"
    />
  );
};

export default CrmInbox08Page;
