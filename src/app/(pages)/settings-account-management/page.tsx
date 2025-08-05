
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
  },
  {
    id: 30,
    title: 'Notification Profiles',
    href: '/account-management-notification-profiles',
    x: 937.16,
    y: 701.99,
    width: 354.51,
    height: 61.42
  },
  {
    id: 31,
    title: 'Private App',
    href: '/account-management-private-app',
    x: 45.63,
    y: 6784.77,
    width: 268.51,
    height: 54.40
  },
  {
    id: 32,
    title: 'Market Contacts',
    href: '/account-management-market-contacts',
    x: 49.14,
    y: 7126.99,
    width: 359.77,
    height: 56.16
  },
  {
    id: 33,
    title: 'Email Service Provider',
    href: '/account-management-email-service-provider',
    x: 1268.85,
    y: 7123.49,
    width: 391.36,
    height: 63.18
  },
  {
    id: 34,
    title: 'Marketplace Download',
    href: '/account-management-marketplace-download',
    x: 40.36,
    y: 7441.14,
    width: 394.87,
    height: 47.38
  },
  {
    id: 35,
    title: 'Marketplace (Themes)',
    href: '/account-management-marketplace-themes',
    x: 61.42,
    y: 7504.32,
    width: 384.34,
    height: 56.16
  },
  {
    id: 36,
    title: 'Marketplace (Module)',
    href: '/account-management-marketplace-module',
    x: 1017.89,
    y: 7490.28,
    width: 386.10,
    height: 61.42
  },
  {
    id: 37,
    title: 'Reports & Analytics Tracking',
    href: '/account-management-reports-analytics-tracking',
    x: 40.36,
    y: 7820.22,
    width: 463.32,
    height: 52.65
  },
  {
    id: 38,
    title: 'Tracking Code',
    href: '/account-management-tracking-code',
    x: 64.93,
    y: 7890.42,
    width: 273.78,
    height: 43.87
  },
  {
    id: 39,
    title: 'Tracking Code TC',
    href: '/account-management-tracking-code-tc',
    x: 89.50,
    y: 7955.35,
    width: 328.18,
    height: 45.63
  },
  {
    id: 40,
    title: 'Advance Tracking',
    href: '/account-management-advance-tracking',
    x: 572.13,
    y: 7946.58,
    width: 356.26,
    height: 54.40
  },
  {
    id: 41,
    title: 'Analytics Views',
    href: '/account-management-analytics-views',
    x: 1303.95,
    y: 7948.33,
    width: 312.39,
    height: 59.67
  },
  {
    id: 42,
    title: 'Tracking URL',
    href: '/account-management-tracking-url',
    x: 63.18,
    y: 8197.54,
    width: 266.76,
    height: 63.18
  },
  {
    id: 43,
    title: 'Privacy & Consent',
    href: '/account-management-privacy-consent',
    x: 40.36,
    y: 8564.33,
    width: 328.18,
    height: 47.38
  },
  {
    id: 44,
    title: 'Data Privacy',
    href: '/account-management-data-privacy',
    x: 64.93,
    y: 8632.77,
    width: 247.45,
    height: 50.89
  },
  {
    id: 45,
    title: 'Consent Options',
    href: '/account-management-consent-options',
    x: 598.45,
    y: 8625.75,
    width: 312.39,
    height: 57.91
  },
  {
    id: 46,
    title: 'Cookies',
    href: '/account-management-cookies',
    x: 63.18,
    y: 8943.41,
    width: 187.78,
    height: 54.40
  },
  {
    id: 47,
    title: 'Data Privacy Dashboard',
    href: '/account-management-data-privacy-dashboard',
    x: 64.93,
    y: 9262.81,
    width: 419.44,
    height: 59.67
  },
  {
    id: 48,
    title: 'Data Privacy & Consent',
    href: '/account-management-data-privacy-consent',
    x: 64.93,
    y: 9589.24,
    width: 407.16,
    height: 56.16
  },
  {
    id: 49,
    title: 'Security',
    href: '/account-management-security',
    x: 40.36,
    y: 9910.40,
    width: 203.58,
    height: 49.14
  },
  {
    id: 50,
    title: 'Security Health Checkup',
    href: '/account-management-security-health-checkup',
    x: 54.40,
    y: 9987.62,
    width: 421.20,
    height: 45.63
  },
  {
    id: 51,
    title: 'Settings & Activity',
    href: '/account-management-settings-activity',
    x: 52.65,
    y: 10214.02,
    width: 333.45,
    height: 59.67
  },
  {
    id: 52,
    title: 'Approvals',
    href: '/account-management-approvals',
    x: 40.36,
    y: 10491.30,
    width: 207.09,
    height: 52.65
  },
  {
    id: 53,
    title: 'Web Content- set up approval',
    href: '/account-management-web-content-set-up-approval',
    x: 56.16,
    y: 10575.54,
    width: 496.66,
    height: 50.89
  },
  {
    id: 54,
    title: 'Routing',
    href: '/account-management-routing',
    x: 42.12,
    y: 10842.30,
    width: 179.01,
    height: 49.14
  },
  {
    id: 55,
    title: 'Rulesets',
    href: '/account-management-rulesets',
    x: 56.16,
    y: 10923.03,
    width: 184.27,
    height: 47.38
  },
  {
    id: 56,
    title: 'Skills',
    href: '/account-management-skills',
    x: 56.16,
    y: 11152.93,
    width: 171.99,
    height: 59.67
  },
  {
    id: 57,
    title: 'AI',
    href: '/account-management-ai',
    x: 38.61,
    y: 11430.22,
    width: 145.66,
    height: 49.14
  },
  {
    id: 58,
    title: 'Access',
    href: '/account-management-access',
    x: 52.65,
    y: 11505.69,
    width: 189.54,
    height: 56.16
  },
  {
    id: 59,
    title: 'Data sources',
    href: '/account-management-data-sources',
    x: 52.65,
    y: 11768.93,
    width: 257.98,
    height: 56.16
  },
  {
    id: 60,
    title: 'Commerce accounts',
    href: '/account-management-commerce-accounts',
    x: 40.36,
    y: 12039.20,
    width: 361.53,
    height: 52.65
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
