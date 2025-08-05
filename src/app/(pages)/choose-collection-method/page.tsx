import { ChooseCollectionMethodImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ChooseCollectionMethodPage = () => {
  return (
    <CommonPage
      pageTitle={`Choose Collection Method`}
      src={ChooseCollectionMethodImage}
      backRoute="/subscriptions-main"
    />
  );
};

export default ChooseCollectionMethodPage;
