import useAppStore from '@store/app-store';
import { UserInfo } from '../user-info/UserInfo';
import { NavigationList } from '@features/navigation/navigation-list/NavigationList';
import { SidebarCloseButton } from '../sidebar-close-button/SidebarCloseButton';
import useBreakpoints from '@shared/hooks/useBreakpoints';
import './styles.scss';

export function Sidebar() {
  const showSidebar = useAppStore((state) => state.showSidebar);
  const { isMobile } = useBreakpoints();
  return (
    <>
      <div className={`main_nav_box  ${!showSidebar && 'hidden_nav_box'} `}>
        <div className="main_nav_inner ">
          <SidebarCloseButton />
          <UserInfo />
          <NavigationList />
          <div className="support-box">
            <button className="support-button">Поддержка</button>
            <p className="support-pic">ヽ(*・ω・)ﾉ</p>
          </div>
        </div>
      </div>
    </>
  );
}
