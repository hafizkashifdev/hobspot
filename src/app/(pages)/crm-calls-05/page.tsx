import { CrmCalls05Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmCalls05Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Calls 05`}
      src={CrmCalls05Image}
      backRoute="/crm-calls"
    />
  );
};

export default CrmCalls05Page;
