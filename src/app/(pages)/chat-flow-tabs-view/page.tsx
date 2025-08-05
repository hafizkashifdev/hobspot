import { ChatFlowTabsViewImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ChatFlowTabsViewPage = () => {
  return (
    <CommonPage
      pageTitle={`Chat flow _ Tabs View`}
      src={ChatFlowTabsViewImage}
      backRoute="/chatflows-main"
    />
  );
};

export default ChatFlowTabsViewPage;
