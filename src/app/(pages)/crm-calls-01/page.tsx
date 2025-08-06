import { CrmCalls01Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmCalls01Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Calls 01`}
      src={CrmCalls01Image}
      backRoute="/crm-calls"
    />
  );
};

export default CrmCalls01Page;
