'use client'
import FaGlobalScreen from "@/components/fa-global-screen";
import {
  SettingsImage1,
  SettingsImage2,
  SettingsImage3,
  SettingsImage4,
} from "@/assets";

const cardsData = [
  { key: '1', title: 'Your Preferences', href: '/settings-your-preferences', icon: SettingsImage1 },
  { key: '2', title: 'Account Management', href: '/settings-account-management', icon: SettingsImage2 },
  { key: '3', title: 'Data Management', href: '/settings-data-management', icon: SettingsImage3 },
  { key: '4', title: 'Tools', href: '/settings-tools', icon: SettingsImage4 },
]

export default function HubspotWorkspacePage() {
  return (
    <FaGlobalScreen
      pageTitle="Settings"
      cardsData={cardsData}
      gridSize={{ xs: 12, md: 6, lg: 3 }}
      backRoute="/"
    />
  );
}
