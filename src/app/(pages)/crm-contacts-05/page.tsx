import { CrmContacts05Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmContacts05Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Contacts 05`}
      src={CrmContacts05Image}
      backRoute="/crm-contacts"
    />
  );
};

export default CrmContacts05Page;
