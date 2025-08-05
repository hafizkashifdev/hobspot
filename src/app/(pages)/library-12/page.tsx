import { Library12Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Library12Page = () => {
  return (
    <CommonPage
      pageTitle={`Create New Folder`}
      src={Library12Image}
      backRoute="/library"
    />
  );
};

export default Library12Page;
