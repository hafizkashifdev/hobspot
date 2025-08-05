import { CrmLists08Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmLists08Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Lists 08`}
      src={CrmLists08Image}
      backRoute="/crm-lists"
    />
  );
};

export default CrmLists08Page;
