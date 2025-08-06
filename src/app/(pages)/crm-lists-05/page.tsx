import { CrmLists05Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmLists05Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Lists 05`}
      src={CrmLists05Image}
      backRoute="/crm-lists"
    />
  );
};

export default CrmLists05Page;
