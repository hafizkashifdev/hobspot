import { CrmLists03Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmLists03Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Lists 03`}
      src={CrmLists03Image}
      backRoute="/crm-lists"
    />
  );
};

export default CrmLists03Page;
