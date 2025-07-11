import { QualifyingHoldingsAndCloseLinksImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const QualifyingHoldingsAndCloseLinksPage = () => {
  return (
    <CommonPage
      pageTitle="Qualifying holdings and close links"
      src={QualifyingHoldingsAndCloseLinksImage}
      backRoute="/semi"
    />
  );
};

export default QualifyingHoldingsAndCloseLinksPage;
