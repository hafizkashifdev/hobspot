import { FormsFormPropertiesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const FormsFormPropertiesPage = () => {
  return (
    <CommonPage
      pageTitle={`Form Properties  `}
      src={FormsFormPropertiesImage}
      backRoute="/forms"
    />
  );
};

export default FormsFormPropertiesPage;
