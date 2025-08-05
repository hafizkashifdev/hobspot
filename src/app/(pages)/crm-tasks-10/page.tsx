import { CrmTasks10Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmTasks10Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Tasks 10`}
      src={CrmTasks10Image}
      backRoute="/crm-tasks"
    />
  );
};

export default CrmTasks10Page;
