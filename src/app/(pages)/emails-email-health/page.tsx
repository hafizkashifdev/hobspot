import { EmailsEmailHealthImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const EmailsEmailHealthPage = () => {
  return (
    <CommonPage
      pageTitle={`Email Health    `}
      src={EmailsEmailHealthImage}
      backRoute="/emails"
    />
  );
};

export default EmailsEmailHealthPage;
