import { SharingCustomerReviewImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SharingCustomerReviewPage = () => {
  return (
    <CommonPage
      pageTitle={` Sharing & Customer Review`}
      src={SharingCustomerReviewImage}
      backRoute="/quotes-main"
    />
  );
};

export default SharingCustomerReviewPage;
