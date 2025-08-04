
import React from "react";
import { SettingsAccountManagementImage } from "@/assets";
import HubspotFeaturePage from "@/features/hubspot-feature-page";

const areas = [
  {
    id: 1,
    title: 'Account Details',
    href: '/account-management-account-details',
    x: 31.59,
    y: 22.81,
    width: 287.82,
    height: 47.38
  },
  {
    id: 2,
    title: 'General',
    href: '/account-management-setting-general-1',
    x: 43.87,
    y: 89.50,
    width: 254.47,
    height: 49.14
  },
  {
    id: 3,
    title: 'Branding',
    href: '/account-management-branding',
    x: 38.61,
    y: 398.38,
    width: 243.94,
    height: 49.14
  },
  {
    id: 4,
    title: 'User Default',
    href: '/account-management-user-default',
    x: 45.63,
    y: 705.50,
    width: 266.76,
    height: 54.40
  },
  {
    id: 5,
    title: 'Currencies',
    href: '/account-management-currencies',
    x: 49.14,
    y: 1023.16,
    width: 228.15,
    height: 52.65
  },
  {
    id: 6,
    title: 'Data Hosting',
    href: '/account-management-data-hosting',
    x: 1138.99,
    y: 1023.16,
    width: 256.23,
    height: 52.65
  },
  {
    id: 7,
    title: 'Feature Release',
    href: '/account-management-feature-release',
    x: 1456.64,
    y: 1021.40,
    width: 301.86,
    height: 52.65
  },
  {
    id: 8,
    title: 'Audit Log',
    href: '/account-management-audit-log',
    x: 29.83,
    y: 1363.62,
    width: 212.35,
    height: 59.67
  },
  {
    id: 9,
    title: 'Events',
    href: '/account-management-events',
    x: 43.87,
    y: 1437.33,
    width: 221.13,
    height: 54.40
  },
  {
    id: 10,
    title: 'Analyse',
    href: '/account-management-analyse',
    x: 42.12,
    y: 1737.44,
    width: 208.84,
    height: 68.44
  },
  {
    id: 11,
    title: 'Notifications',
    href: '/account-management-notifications',
    x: 1449.62,
    y: 1742.70,
    width: 275.53,
    height: 64.93
  },
  {
    id: 12,
    title: 'User & Teams',
    href: '/account-management-user-teams',
    x: 35.10,
    y: 2091.94,
    width: 286.06,
    height: 52.65
  },
  {
    id: 13,
    title: 'Users',
    href: '/account-management-users',
    x: 52.65,
    y: 2167.41,
    width: 205.33,
    height: 54.40
  },
  {
    id: 14,
    title: 'Seats',
    href: '/account-management-seats',
    x: 47.38,
    y: 2469.26,
    width: 180.76,
    height: 61.42
  },
  {
    id: 15,
    title: 'Teams',
    href: '/account-management-teams',
    x: 43.87,
    y: 2790.43,
    width: 193.05,
    height: 70.20
  },
  {
    id: 16,
    title: 'Permission Set',
    href: '/account-management-permission-set',
    x: 45.63,
    y: 3151.95,
    width: 312.39,
    height: 57.91
  },
  {
    id: 17,
    title: 'Presets',
    href: '/account-management-presets',
    x: 42.12,
    y: 3502.95,
    width: 280.80,
    height: 56.16
  },
  {
    id: 18,
    title: 'Product Update',
    href: '/account-management-product-update',
    x: 35.10,
    y: 3896.07,
    width: 284.31,
    height: 56.16
  },
  {
    id: 19,
    title: 'New to you',
    href: '/account-management-new-to-you',
    x: 52.65,
    y: 3973.29,
    width: 263.25,
    height: 49.14
  },
  {
    id: 20,
    title: 'Recommended for you',
    href: '/account-management-recommended-for-you',
    x: 50.89,
    y: 4275.15,
    width: 394.87,
    height: 54.40
  },
  {
    id: 21,
    title: 'Scheduled for release',
    href: '/account-management-scheduled-for-release',
    x: 45.63,
    y: 4582.27,
    width: 393.12,
    height: 73.71
  },
  {
    id: 22,
    title: 'All Products update live',
    href: '/account-management-all-products-update-live',
    x: 47.38,
    y: 4931.51,
    width: 429.97,
    height: 61.42
  },
  {
    id: 23,
    title: 'All Products update beta',
    href: '/account-management-all-products-update-beta',
    x: 50.89,
    y: 5240.39,
    width: 422.95,
    height: 59.67
  },
  {
    id: 24,
    title: 'All product update in development',
    href: '/account-management-all-product-update-in-development',
    x: 52.65,
    y: 5559.79,
    width: 584.41,
    height: 61.42
  },
  {
    id: 25,
    title: 'All products update in sunset',
    href: '/account-management-all-products-update-in-sunset',
    x: 43.87,
    y: 5870.43,
    width: 507.19,
    height: 66.69
  },
  {
    id: 26,
    title: 'Integrations',
    href: '/account-management-integrations',
    x: 35.10,
    y: 6261.79,
    width: 243.94,
    height: 54.40
  },
  {
    id: 27,
    title: 'Connected Apps',
    href: '/account-management-connected-apps',
    x: 49.14,
    y: 6331.99,
    width: 300.10,
    height: 50.89
  },
  {
    id: 28,
    title: 'My Apps',
    href: '/account-management-my-apps',
    x: 85.99,
    y: 6407.45,
    width: 207.09,
    height: 54.40
  },
  {
    id: 29,
    title: 'Notification Configuration',
    href: '/account-management-notification-configuration',
    x: 942.43,
    y: 6400.43,
    width: 466.83,
    height: 61.42
  }
];

const AccountManagementPage = () => {
  return (
    <HubspotFeaturePage
      imageSrc={SettingsAccountManagementImage}
      backRoute={'/hubspot-settings'}
      pageTitle={'Account Management'}
      areas={areas}
      imageHeight={12381}
      imageWidth={1848}
    />
  );
};

export default AccountManagementPage;
