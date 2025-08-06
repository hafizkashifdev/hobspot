import { Library07Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Library07Page = () => {
  return (
    <CommonPage
      pageTitle={`Coaching Playlists `}
      src={Library07Image}
      backRoute="/library"
    />
  );
};

export default Library07Page;
