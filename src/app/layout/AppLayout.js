import "./styles.css";
import { useEffect, useState } from "react";

import useAppStore from "../../store/app-store";
import MotivationModal from "../../widgets/motivation-modal/MotivationModal";
import TasksPage from "../../pages/task-page/TasksPage";
import Sidebar from "./sidebar/Sidebar";
import GamePage from "../../pages/game-page/ui/GamePage";

function AppLayout({ children }) {
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
