import { CrmLists01Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmLists01Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Lists 01`}
      src={CrmLists01Image}
      backRoute="/crm-lists"
    />
  );
};

export default CrmLists01Page;
