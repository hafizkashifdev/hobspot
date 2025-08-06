import { CtaSCtaSViewsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CtaSCtaSViewsPage = () => {
  return (
    <CommonPage
      pageTitle={`CTA's Views`}
      src={CtaSCtaSViewsImage}
      backRoute="/ctas"
    />
  );
};

export default CtaSCtaSViewsPage;
