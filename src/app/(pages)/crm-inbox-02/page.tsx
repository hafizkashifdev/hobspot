import { CrmInbox02Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmInbox02Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Inbox 02`}
      src={CrmInbox02Image}
      backRoute="/crm-inbox"
    />
  );
};

export default CrmInbox02Page;
