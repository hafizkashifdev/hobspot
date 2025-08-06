import { CtaSCreateCtaSImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CtaSCreateCtaSPage = () => {
  return (
    <CommonPage
      pageTitle={`Create CTA's`}
      src={CtaSCreateCtaSImage}
      backRoute="/ctas"
    />
  );
};

export default CtaSCreateCtaSPage;
