import { CreateChatFlowStep1ChannelSelectChannelImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CreateChatFlowStep1ChannelSelectChannelPage = () => {
  return (
    <CommonPage
      pageTitle={`Create Chat flow _Step 1: Channel (Select Channel)`}
      src={CreateChatFlowStep1ChannelSelectChannelImage}
      backRoute="/chatflows-main"
    />
  );
};

export default CreateChatFlowStep1ChannelSelectChannelPage;
