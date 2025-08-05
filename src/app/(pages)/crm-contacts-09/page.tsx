import { CrmContacts09Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmContacts09Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Contacts 09`}
      src={CrmContacts09Image}
      backRoute="/crm-contacts"
    />
  );
};

export default CrmContacts09Page;
