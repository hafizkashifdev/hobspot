import { Library21Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Library21Page = () => {
  return (
    <CommonPage
      pageTitle={`Whatsapp`}
      src={Library21Image}
      backRoute="/library"
    />
  );
};

export default Library21Page;
