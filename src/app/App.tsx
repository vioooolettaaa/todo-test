import React, { useEffect } from "react";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "./layout/AppLayout";
import TasksPage from "../pages/task-page/TasksPage";
import GamePage from "../pages/game-page/ui/GamePage";

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/game" element={<GamePage />} />

          <Route
            path="*"
            element={
              <div style={{ padding: "20px", textAlign: "center" }}>
                <h2>404 - Страница не найдена</h2>
              </div>
            }
          />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}
