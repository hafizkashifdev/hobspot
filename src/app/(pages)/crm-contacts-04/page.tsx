import { CrmContacts04Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmContacts04Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Contacts 04`}
      src={CrmContacts04Image}
      backRoute="/crm-contacts"
    />
  );
};

export default CrmContacts04Page;
