import { CrmContacts10Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmContacts10Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Contacts 10`}
      src={CrmContacts10Image}
      backRoute="/crm-contacts"
    />
  );
};

export default CrmContacts10Page;
