import { CustomiseRecipientImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CustomiseRecipientPage = () => {
  return (
    <CommonPage
      pageTitle={`Customise _ Recipient`}
      src={CustomiseRecipientImage}
      backRoute="/surveys-main"
    />
  );
};

export default CustomiseRecipientPage;
