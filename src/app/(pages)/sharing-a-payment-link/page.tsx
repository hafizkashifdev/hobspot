import { SharingAPaymentLinkImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SharingAPaymentLinkPage = () => {
  return (
    <CommonPage
      pageTitle={` Sharing a Payment Link`}
      src={SharingAPaymentLinkImage}
      backRoute="/invoice-main"
    />
  );
};

export default SharingAPaymentLinkPage;
