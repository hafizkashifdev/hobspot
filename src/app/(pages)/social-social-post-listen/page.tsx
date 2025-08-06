import { SocialSocialPostListenImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SocialSocialPostListenPage = () => {
  return (
    <CommonPage
      pageTitle={`Social Post Listen`}
      src={SocialSocialPostListenImage}
      backRoute="/social"
    />
  );
};

export default SocialSocialPostListenPage;
