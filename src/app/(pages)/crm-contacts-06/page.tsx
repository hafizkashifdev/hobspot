import { CrmContacts06Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmContacts06Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Contacts 06`}
      src={CrmContacts06Image}
      backRoute="/crm-contacts"
    />
  );
};

export default CrmContacts06Page;
