import { EmailsBlogRssEmailImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const EmailsBlogRssEmailPage = () => {
  return (
    <CommonPage
      pageTitle={`Blog/RSS Email  `}
      src={EmailsBlogRssEmailImage}
      backRoute="/emails"
    />
  );
};

export default EmailsBlogRssEmailPage;
