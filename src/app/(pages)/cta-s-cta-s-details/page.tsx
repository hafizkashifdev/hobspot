import { CtaSCtaSDetailsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CtaSCtaSDetailsPage = () => {
  return (
    <CommonPage
      pageTitle={`CTA's Details`}
      src={CtaSCtaSDetailsImage}
      backRoute="/ctas"
    />
  );
};

export default CtaSCtaSDetailsPage;
