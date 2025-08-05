import { ReportsAttribution16Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ReportsAttribution16Page = () => {
  return (
    <CommonPage
      pageTitle={`reports Attribution`}
      src={ReportsAttribution16Image}
      backRoute="/reports"
    />
  );
};

export default ReportsAttribution16Page;
