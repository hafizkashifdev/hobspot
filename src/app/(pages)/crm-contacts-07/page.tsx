import { CrmContacts07Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmContacts07Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Contacts 07`}
      src={CrmContacts07Image}
      backRoute="/crm-contacts"
    />
  );
};

export default CrmContacts07Page;
