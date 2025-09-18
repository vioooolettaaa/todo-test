import { useEffect, useState } from "react";
import Modal from "@shared/ui/modal/Modal";
import ButterfluIcon from "@shared/ui/icons/ButterfluIcon";
import useAppStore from "@store/app-store";

export default function TaskGreatingModal({ redyTasks }) {
  const showModalTemplate = useAppStore((state) => state.showModalTemplate);
  const closeModalTemplate = useAppStore((state) => state.closeModalTemplate);
  const openModalTemplate = useAppStore((state) => state.openModalTemplate);

  useEffect(() => {
    if (redyTasks.length % 10 === 0 && redyTasks.length != 0) {
      openModalTemplate();
    }
  }, [redyTasks]);

  return (
    <>
      <Modal
        isOpen={showModalTemplate}
        onClose={closeModalTemplate}
        icon={<ButterfluIcon width="25" height="25" />}
      >
        <h3>Ты молодец!</h3>
        <p>Выполнено уже {redyTasks.length} задач. Дальше — больше. </p>
      </Modal>
    </>
  );
}
