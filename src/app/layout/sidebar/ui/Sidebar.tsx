import "./styles.css";
import SearcIcon from "../../../../shared/ui/icons/SearcIcon";
import FilterIcon from "../../../../shared/ui/icons/FilterIcon";
import FunIcon from "../../../../shared/ui/icons/FunIcon";
import useAppStore from "../../../../store/app-store";
import ArchiveIcon from "../../../../shared/ui/icons/ArchiveIcon";
import CloseIcon from "../../../../shared/ui/icons/CloseIcon";
import GameIcon from "../../../../shared/ui/icons/GameIcon";
import { useNavigate, useLocation } from "react-router-dom";
import UrgentlyIcon from "../../../../shared/ui/icons/UrgentlyIcon";

export function Sidebar() {
  const showSidebar = useAppStore((state) => state.showSidebar);
  const openModal = useAppStore((state) => state.openModal);

  const navigate = useNavigate();

  return (
    <>
      <div className={`main-nav-box ${!showSidebar && "hidden-nav-box"}`}>
        <div className="main-nav-inner">
          <SidebarCloseButton />
          <UserInfo />

          <div className="nav-items">
            <SidebarButton
              onClick={() => navigate("/tasks")}
              icon={<UrgentlyIcon />}
              title="Задачи"
            />
            <SidebarButton
              onClick={() => navigate("*")}
              icon={<SearcIcon />}
              title="Поиск"
            />
            <SidebarButton
              onClick={() => navigate("*")}
              icon={<FilterIcon />}
              title="Фильтр"
            />
            <SidebarButton
              onClick={openModal}
              icon={<FunIcon />}
              title="Мотивация"
            />
            <SidebarButton
              onClick={() => navigate("/game")}
              icon={<GameIcon />}
              title="Игра"
            />
            <SidebarButton
              onClick={() => navigate("*")}
              icon={<ArchiveIcon />}
              title="Архив"
            />
          </div>

          <div className="support-box">
            <button>Поддержка</button>
            <p>ヽ(*・ω・)ﾉ</p>
          </div>
        </div>
      </div>
    </>
  );
}

function UserInfo() {
  return (
    <div className="user-info">
      <div className="user-photo-container">
        <img
          className="user-photo"
          src="/img/8381e2a043251be9b15188ba25f6bac3.jpg"
          alt="photo"
          width={60}
          height={60}
          style={{ objectFit: "cover" }}
        />
      </div>
      <p className="user-name">Виолетта</p>
    </div>
  );
}

type SidebarButtonProps = {
  onClick: () => void;
  icon: React.ReactNode;
  title: string;
};

function SidebarButton({ onClick, icon, title }: SidebarButtonProps) {
  return (
    <button className="nav-item" onClick={onClick}>
      {icon}
      <span className="nav-item-name">{title}</span>
    </button>
  );
}

function SidebarCloseButton() {
  const toogleSidebar = useAppStore((state) => state.toogleSidebar);

  return (
    <div className="close-button-div">
      <button className="close-button" onClick={toogleSidebar}>
        <CloseIcon />
      </button>
    </div>
  );
}
