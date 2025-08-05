
import React from "react";
import { SettingsYourPreferencesImage } from "@/assets";
import HubspotFeaturePage from "@/features/hubspot-feature-page";

const areas = [
  {
    id: 1,
    title: 'Profile',
    href: '/settings-profile-1',
    x: 36.85,
    y: 80.73,
    width: 198.31,
    height: 56.16
  },
  {
    id: 2,
    title: 'Email',
    href: '/settings-email',
    x: 36.85,
    y: 396.63,
    width: 194.80,
    height: 52.65
  },
  {
    id: 3,
    title: 'Calling',
    href: '/settings-calling',
    x: 43.87,
    y: 875.74,
    width: 214.11,
    height: 56.16
  },
  {
    id: 4,
    title: 'Calendar',
    href: '/settings-calendar',
    x: 49.14,
    y: 1184.62,
    width: 236.92,
    height: 66.69
  },
  {
    id: 5,
    title: 'Tasks',
    href: '/settings-tasks',
    x: 33.34,
    y: 1498.76,
    width: 189.54,
    height: 66.69
  },
  {
    id: 6,
    title: 'Security',
    href: '/settings-security',
    x: 38.61,
    y: 1811.15,
    width: 193.05,
    height: 61.42
  },
  {
    id: 7,
    title: 'Security',
    href: '/settings-security',
    x: 26.32,
    y: 2332.38,
    width: 200.07,
    height: 59.67
  },
  {
    id: 8,
    title: 'Security Email',
    href: '/settings-security-email',
    x: 40.36,
    y: 2409.60,
    width: 214.11,
    height: 50.89
  },
  {
    id: 9,
    title: 'Desktop',
    href: '/settings-security-desktop',
    x: 565.11,
    y: 2399.07,
    width: 200.07,
    height: 68.44
  },
  {
    id: 10,
    title: 'Other Apps',
    href: '/settings-security-other-apps',
    x: 40.36,
    y: 2697.41,
    width: 257.98,
    height: 57.91
  },
  {
    id: 11,
    title: 'Mobile Apps',
    href: '/settings-security-mobile-apps',
    x: 972.26,
    y: 2692.15,
    width: 250.96,
    height: 73.71
  }
];

const MYourPreferencesPage = () => {
  return (
    <HubspotFeaturePage
      imageSrc={SettingsYourPreferencesImage}
      backRoute={'/hubspot-settings'}
      pageTitle={'Your Preferences'}
      areas={areas}
      imageHeight={3113}
      imageWidth={1848}
    />
  );
};

export default MYourPreferencesPage;
