import { CrmTasks01Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmTasks01Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Tasks 01`}
      src={CrmTasks01Image}
      backRoute="/crm-tasks"
    />
  );
};

export default CrmTasks01Page;
