import { Library08Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Library08Page = () => {
  return (
    <CommonPage
      pageTitle={`Find Recording`}
      src={Library08Image}
      backRoute="/library"
    />
  );
};

export default Library08Page;
