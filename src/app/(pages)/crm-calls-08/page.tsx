import { CrmCalls08Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmCalls08Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Calls 08`}
      src={CrmCalls08Image}
      backRoute="/crm-calls"
    />
  );
};

export default CrmCalls08Page;
