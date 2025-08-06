import { CrmInbox01Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmInbox01Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Inbox 01`}
      src={CrmInbox01Image}
      backRoute="/crm-inbox"
    />
  );
};

export default CrmInbox01Page;
