'use client'
import {
  CrmImage1,
  CrmImage2,
  CrmImage3,
  CrmImage4,
  CrmImage5,
  CrmImage6,
  CrmImage7,
  CrmImage8,
} from "@/assets";
import FaGlobalScreen from "@/components/fa-global-screen";

const cardsData = [
  { key: '1', title: 'Contacts', href: '/crm-contacts', icon: CrmImage1 },
  { key: '2', title: 'Companies', href: '/crm-companies', icon: CrmImage2 },
  { key: '3', title: 'Deals', href: '/crm-deals', icon: CrmImage3 },
  { key: '4', title: 'Tickets', href: '/crm-tickets', icon: CrmImage4 },
  { key: '5', title: 'Lists', href: '/crm-lists', icon: CrmImage5 },
  { key: '6', title: 'Inbox', href: '/crm-inbox', icon: CrmImage6 },
  { key: '7', title: 'Calls ', href: '/crm-calls', icon: CrmImage7 },
  { key: '8', title: 'Tasks', href: '/crm-tasks', icon: CrmImage8 },
]

export default function HubspotWorkspacePage() {
  return (
    <FaGlobalScreen
      pageTitle="CRM"
      cardsData={cardsData}
      gridSize={{ xs: 12, md: 6, lg: 3 }}
      backRoute="/"
    />
  );
}
