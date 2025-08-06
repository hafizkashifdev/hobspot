import { SocialPostsReplyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SocialPostsReplyPage = () => {
  return (
    <CommonPage
      pageTitle={` Posts Reply`}
      src={SocialPostsReplyImage}
      backRoute="/social"
    />
  );
};

export default SocialPostsReplyPage;
