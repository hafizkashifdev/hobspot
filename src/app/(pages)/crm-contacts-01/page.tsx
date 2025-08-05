import { CrmContacts01Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmContacts01Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Contacts 01`}
      src={CrmContacts01Image}
      backRoute="/crm-contacts"
    />
  );
};

export default CrmContacts01Page;
