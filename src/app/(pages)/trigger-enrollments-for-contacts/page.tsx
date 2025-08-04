import { TriggerEnrollmentsForContactsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TriggerEnrollmentsForContactsPage = () => {
  return (
    <CommonPage
      pageTitle={`Trigger Enrollments for Contacts`}
      src={TriggerEnrollmentsForContactsImage}
      backRoute="/workflows-main"
    />
  );
};

export default TriggerEnrollmentsForContactsPage;
