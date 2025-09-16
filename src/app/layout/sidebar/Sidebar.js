import "./styles.css";
import SearcIcon from "../../../shared/ui/icons/SearcIcon";
import FilterIcon from "../../../shared/ui/icons/FilterIcon";
import FunIcon from "../../../shared/ui/icons/FunIcon";
import OpenFormTask from "../../../features/task/open-form-task/OpenFormTask";
import useAppStore from "../../../store/app-store";
import ArchiveIcon from "../../../shared/ui/icons/ArchiveIcon";
import CloseIcon from "../../../shared/ui/icons/CloseIcon";
import GameIcon from "../../../shared/ui/icons/GameIcon";
import { useNavigate, useLocation } from "react-router-dom";
import UrgentlyIcon from "../../../shared/ui/icons/UrgentlyIcon";

function Sidebar() {
  const showSidebar = useAppStore((state) => state.showSidebar);
  const toogleSidebar = useAppStore((state) => state.toogleSidebar);
  const openModal = useAppStore((state) => state.openModal);

  const navigate = useNavigate();

  return (
    <>
      <div className={`main-nav-box ${!showSidebar && "hidden-nav-box"}`}>
        <div className="main-nav-inner">
          <div className="close-button-div">
            <button className="close-button" onClick={toogleSidebar}>
              <CloseIcon />
            </button>
          </div>
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

          <div className="nav-items">
            <button className="nav-item" onClick={() => navigate("/tasks")}>
              <UrgentlyIcon />
              <span className="nav-item-name">Задачи</span>
            </button>
            <button className="nav-item" onClick={() => navigate("*")}>
              <SearcIcon />
              <span className="nav-item-name">Поиск</span>
            </button>
            <button className="nav-item" onClick={() => navigate("*")}>
              <FilterIcon />
              <span className="nav-item-name">Фильтр</span>
            </button>
            <button className="nav-item" onClick={openModal}>
              <FunIcon />
              <span className="nav-item-name">Мотивация</span>
            </button>
            <button className="nav-item" onClick={() => navigate("/game")}>
              <GameIcon />
              <span className="nav-item-name">Игра</span>
            </button>
            <button className="nav-item" onClick={() => navigate("*")}>
              <ArchiveIcon />
              <span className="nav-item-name">Архив</span>
            </button>
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

export default Sidebar;
