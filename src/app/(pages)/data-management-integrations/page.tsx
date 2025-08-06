import { DataManagementIntegrationsImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "Connected Apps",
    title: "Connected Apps",
    href: "/data-management-integrations-connected-apps",
    coords: "38,39,339,109",
    shape: "rect",
  },
  {
    alt: "My Apps",
    title: "My Apps",
    href: "/data-management-integrations-connected-apps-my-apps",
    coords: "43,134,254,193",
    shape: "rect",
  },
  {
    alt: "Notification Configuration",
    title: "Notification Configuration",
    href: "/data-management-integrations-connected-apps-notification-configuration",
    coords: "45,426,518,501",
    shape: "rect",
  },
  {
    alt: "Go to App Marketplace",
    title: "Go to App Marketplace",
    href: "/data-management-integrations-connected-apps-go-to-app-marketplace",
    coords: "50,722,461,795",
    shape: "rect",
  },
  {
    alt: "Private Apps",
    title: "Private Apps",
    href: "/data-management-integrations-private-apps",
    coords: "29,1079,300,1144",
    shape: "rect",
  },
  {
    alt: "Private apps",
    title: "Private apps",
     href: "/data-management-integrations-private-apps",
    coords: "47,1167,324,1232",
    shape: "rect",
  },
  {
    alt: "Create a private app",
    title: "Create a private app",
    href: "/data-management-integrations-private-apps-create-a-private-app",
    coords: "58,1471,442,1533",
    shape: "rect",
  },
  {
    alt: "Basic Info",
    title: "Basic Info",
    href: "/data-management-integrations-private-apps-create-a-private-app-basic-info",
    coords: "89,1552,335,1613",
    shape: "rect",
  },
  {
    alt: "Scopes",
    title: "Scopes",
    href: "/data-management-integrations-private-apps-create-a-private-app-scopes",
    coords: "948,1543,1162,1608",
    shape: "rect",
  },
  {
    alt: "Webhooks",
    title: "Webhooks",
    href: "/data-management-integrations-private-apps-create-a-private-app-webhooks",
    coords: "87,1850,340,1916",
    shape: "rect",
  },
  {
    alt: "Email Service Providers",
    title: "Email Service Providers",
    href: "/data-management-integrations-email-service-providers",
    coords: "40,2183,455,2246",
    shape: "rect",
  },
];


const DataManagementIntegrationsPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Integrations`}
      image={DataManagementIntegrationsImage}
      backRoute="/hubspot-data-management"
      areas={areas}
    />
  );
};

export default DataManagementIntegrationsPage;
