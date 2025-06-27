import React from "react";
import { mainSection } from "@/assets";
import { CommonPage } from "@/components";

const OverViewPage = () => {
  return (
    <div>
      <CommonPage
        pageTitle="Mental Health / Overview & Purpose "
        backRoute="/court-hearing"
        src={mainSection}
      />
    </div>
  );
};
export default OverViewPage;
