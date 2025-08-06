import { Library19Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Library19Page = () => {
  return (
    <CommonPage
      pageTitle={`Files & Folder`}
      src={Library19Image}
      backRoute="/library"
    />
  );
};

export default Library19Page;
