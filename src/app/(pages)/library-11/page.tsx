import { Library11Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Library11Page = () => {
  return (
    <CommonPage
      pageTitle={`Create New Folder`}
      src={Library11Image}
      backRoute="/library"
    />
  );
};

export default Library11Page;
