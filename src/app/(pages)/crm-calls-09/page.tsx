import { CrmCalls09Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmCalls09Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Calls 09`}
      src={CrmCalls09Image}
      backRoute="/crm-calls"
    />
  );
};

export default CrmCalls09Page;
