import { useNavigate, useLocation } from "react-router-dom";
import useAppStore from "@store/app-store";
import SearcIcon from "@shared/ui/icons/SearcIcon";
import FilterIcon from "@shared/ui/icons/FilterIcon";
import FunIcon from "@shared/ui/icons/FunIcon";
import ArchiveIcon from "@shared/ui/icons/ArchiveIcon";
import GameIcon from "@shared/ui/icons/GameIcon";
import UrgentlyIcon from "@shared/ui/icons/UrgentlyIcon";
import useBreakpoints from "@shared/hooks/useBreakpoints";
import { NavigationButton } from "./ui/NavigationButton";
import "./styles.css";

export function NavigationList() {
  const navigate = useNavigate();
  const openModal = useAppStore((state) => state.openModal);
  const { isMobile } = useBreakpoints();
  const closeSidebar = useAppStore((state) => state.closeSidebar);

  const clickHandler = (url: string) => {
    if (isMobile) {
      closeSidebar();
    }
    navigate(url);
  };

  return (
    <div className="nav-items">
      <NavigationButton
        onClick={() => clickHandler("/tasks")}
        icon={<UrgentlyIcon />}
        title="Задачи"
      />
      <NavigationButton
        onClick={() => clickHandler("*")}
        icon={<SearcIcon />}
        title="Поиск"
      />
      <NavigationButton
        onClick={() => clickHandler("*")}
        icon={<FilterIcon />}
        title="Фильтр"
      />
      <NavigationButton
        onClick={openModal}
        icon={<FunIcon />}
        title="Мотивация"
      />
      <NavigationButton
        onClick={() => clickHandler("/game")}
        icon={<GameIcon />}
        title="Игра"
      />
      <NavigationButton
        onClick={() => clickHandler("*")}
        icon={<ArchiveIcon />}
        title="Архив"
      />
    </div>
  );
}
