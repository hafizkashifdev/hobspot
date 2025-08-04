import { CreatingAQuoteImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreatingAQuotePage = () => {
  return (
    <CommonPage
      pageTitle={` Creating a Quote`}
      src={CreatingAQuoteImage}
      backRoute="/quotes-main"
    />
  );
};

export default CreatingAQuotePage;
