import { SupplementalImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SupplementalPage = () => {
  return (
    <CommonPage
      pageTitle={`FCA Application / FCA Guide to Payment Services and Electronic Money Regulation / Supplemental`}
      src={SupplementalImage}
      backRoute="/supplemental-ac"
    />
  );
};

export default SupplementalPage;
