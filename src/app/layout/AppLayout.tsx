import './styles.css';
import MotivationModal from '@widgets/motivation-modal/MotivationModal';
import { Sidebar } from './sidebar/ui/sidebar/Sidebar';
import useAppStore from '@store/app-store';
import useBreakpoints from '@shared/hooks/useBreakpoints';

type AppLayoutProps = {
  children: React.ReactNode;
};

function AppLayout({ children }: AppLayoutProps) {
  const showSidebar = useAppStore((state) => state.showSidebar);
  const { isMobile } = useBreakpoints();

  return (
    <div className="main-flex">
      <Sidebar />
      <div className={`main-content ${showSidebar && !isMobile && 'padding_left'}`}>
        {children}
        <MotivationModal />
      </div>
    </div>
  );
}

export default AppLayout;
