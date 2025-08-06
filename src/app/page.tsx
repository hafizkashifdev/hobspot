'use client';
import FaGlobalScreen from "@/components/fa-global-screen";
import {
  HubspotHome1,
  HubspotHome2,
  HubspotHome3,
  HubspotHome4,
  HubspotHome5,
  HubspotHome6,
  HubspotHome7,
  HubspotHome8,
  HubspotHome9,
  HubspotHome10,
  HubspotHome11
} from "@/assets";

const cardsData = [
  { key: '1', title: 'Workspaces', href: '/hubspot-workspace', icon: HubspotHome1 },
  { key: '2', title: 'Hubspot CRM', href: '/hubspot-crm', icon: HubspotHome2 },
  { key: '3', title: 'Marketing', href: '/hubspot-marketing', icon: HubspotHome3 },
  { key: '4', title: 'Content', href: '/content', icon: HubspotHome4 },
  { key: '5', title: 'Commerce', href: '/hubspot-commerce', icon: HubspotHome5 },
  { key: '6', title: 'Automations', href: '/hubspot-automations', icon: HubspotHome6 },
  { key: '7', title: 'Reporting', href: '/hubspot-reporting', icon: HubspotHome7 },
  { key: '8', title: 'Data Management', href: '/hubspot-data-management', icon: HubspotHome8 },
  { key: '9', title: 'Library', href: '/library', icon: HubspotHome9 },
  { key: '10', title: 'Breeze', href: '/breeze-main', icon: HubspotHome10 },
  { key: '11', title: 'Settings ', href: '/hubspot-settings', icon: HubspotHome11 },
]

export default function Home() {
  return (
    <FaGlobalScreen
      pageTitle="Hubspot"
      cardsData={cardsData}
      gridSize={{ xs: 12, md: 6, lg: 3 }}
      showBackButton={false}
    />
  );
}
