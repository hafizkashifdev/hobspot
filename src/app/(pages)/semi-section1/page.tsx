import { SemiImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SemiPage = () => {
  return (
    <CommonPage
      pageTitle="Conditions for registration"
      src={SemiImage}
      backRoute="/semi"
    />
  );
};

export default SemiPage;
