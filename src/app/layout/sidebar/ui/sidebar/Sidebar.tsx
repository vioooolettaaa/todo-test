import "./styles.css";
import useAppStore from "@store/app-store";
import { UserInfo } from "../user-info/UserInfo";
import { NavigationList } from "@features/navigation/navigation-list/NavigationList";
import { SidebarCloseButton } from "../sidebar-close-button/SidebarCloseButton";

export function Sidebar() {
  const showSidebar = useAppStore((state) => state.showSidebar);

  return (
    <>
      <div className={`main-nav-box ${!showSidebar && "hidden-nav-box"}`}>
        <div className="main-nav-inner">
          <SidebarCloseButton />
          <UserInfo />
          <NavigationList />
          <div className="support-box">
            <button>Поддержка</button>
            <p>ヽ(*・ω・)ﾉ</p>
          </div>
        </div>
      </div>
    </>
  );
}
