import "./styles.css";
import MotivationModal from "../../widgets/motivation-modal/MotivationModal";
import { Sidebar } from "./sidebar/ui/sidebar/Sidebar";

type AppLayoutProps = {
  children: React.ReactNode;
};

function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="main-flex">
      <Sidebar />
      <div className="main-content">
        {children}
        <MotivationModal />
      </div>
    </div>
  );
}

export default AppLayout;
