import { WorkspaceImage1, WorkspaceImage2 } from "@/assets";
import FaGlobalScreen from "@/components/fa-global-screen";

const cardsData = [
  { key: '1', title: 'Sales', href: '/workspace-sales', icon: WorkspaceImage1 },
  { key: '2', title: 'Helpdesk', href: '/workspace-helpdesk', icon: WorkspaceImage2 },
]

export default function HubspotWorkspacePage() {
  return (
    <FaGlobalScreen
      pageTitle="Workspace"
      cardsData={cardsData}
      gridSize={{ xs: 12, md: 6, lg: 6 }}
      backRoute="/"
    />
  );
}
