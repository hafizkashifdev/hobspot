import { CrmTasks05Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CrmTasks05Page = () => {
  return (
    <CommonPage
      pageTitle={`CRM Tasks 05`}
      src={CrmTasks05Image}
      backRoute="/crm-tasks"
    />
  );
};

export default CrmTasks05Page;
