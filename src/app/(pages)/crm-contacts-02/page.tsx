import { CrmContacts02Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmContacts02Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Contacts 02`}
      src={CrmContacts02Image}
      backRoute="/crm-contacts"
    />
  );
};

export default CrmContacts02Page;
