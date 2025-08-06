import { CrmContacts03Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmContacts03Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Contacts 03`}
      src={CrmContacts03Image}
      backRoute="/crm-contacts"
    />
  );
};

export default CrmContacts03Page;
