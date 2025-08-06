import { FormsManageFormsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const FormsManageFormsPage = () => {
  return (
    <CommonPage
      pageTitle={` Manage Forms `}
      src={FormsManageFormsImage}
      backRoute="/forms"
    />
  );
};

export default FormsManageFormsPage;
