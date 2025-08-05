import { CrmContacts08Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmContacts08Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Contacts 08`}
      src={CrmContacts08Image}
      backRoute="/crm-contacts"
    />
  );
};

export default CrmContacts08Page;
