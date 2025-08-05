import { CrmContacts11Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmContacts11Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Contacts 11`}
      src={CrmContacts11Image}
      backRoute="/crm-contacts"
    />
  );
};

export default CrmContacts11Page;
