import { SocialCreateSocialPostImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SocialCreateSocialPostPage = () => {
  return (
    <CommonPage
      pageTitle={`Create Social Post`}
      src={SocialCreateSocialPostImage}
      backRoute="/social"
    />
  );
};

export default SocialCreateSocialPostPage;
