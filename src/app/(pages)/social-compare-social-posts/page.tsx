import { SocialCompareSocialPostsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SocialCompareSocialPostsPage = () => {
  return (
    <CommonPage
      pageTitle={`Compare Social Posts`}
      src={SocialCompareSocialPostsImage}
      backRoute="/social"
    />
  );
};

export default SocialCompareSocialPostsPage;
