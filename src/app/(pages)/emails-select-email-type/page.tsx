import { EmailsSelectEmailTypeImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const EmailsSelectEmailTypePage = () => {
  return (
    <CommonPage
      pageTitle={` Select Email Type  `}
      src={EmailsSelectEmailTypeImage}
      backRoute="/emails"
    />
  );
};

export default EmailsSelectEmailTypePage;
