'use client'
import FaGlobalScreen from "@/components/fa-global-screen";
import {
  AutomationsImage1,
  AutomationsImage2,
  AutomationsImage3,
} from "@/assets";

const cardsData = [
  { key: '1', title: 'Workflows', href: '/workflows-main', icon: AutomationsImage1 },
  { key: '2', title: 'Chatflows', href: '/chatflows-main', icon: AutomationsImage2 },
  { key: '3', title: 'Surveys', href: '/surveys-main', icon: AutomationsImage3 },
]

export default function HubspotCommercePage() {
  return (
    <FaGlobalScreen
      pageTitle="Automations"
      cardsData={cardsData}
      gridSize={{ xs: 12, md: 6, lg: 4 }}
      backRoute="/"
    />
  );
}
