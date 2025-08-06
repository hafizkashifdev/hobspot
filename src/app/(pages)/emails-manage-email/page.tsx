import { EmailsManageEmailImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const EmailsManageEmailPage = () => {
  return (
    <CommonPage
      pageTitle={` Manage Email    `}
      src={EmailsManageEmailImage}
      backRoute="/emails"
    />
  );
};

export default EmailsManageEmailPage;
