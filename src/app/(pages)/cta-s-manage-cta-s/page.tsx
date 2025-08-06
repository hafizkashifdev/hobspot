import { CtaSManageCtaSImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CtaSManageCtaSPage = () => {
  return (
    <CommonPage
      pageTitle={`Manage CTA's`}
      src={CtaSManageCtaSImage}
      backRoute="/ctas"
    />
  );
};

export default CtaSManageCtaSPage;
