import { create } from 'zustand';

const useAppStore = create((set) => ({
  showForm: false,
  openForm: () => set({ showForm: true }),
  closeForm: () => set({ showForm: false }),
  toogleForm: () => set((state) => ({ showForm: !state.showForm })),

  showSidebar: true,
  openSidebar: () => set({ showSidebar: true }),
  closeSidebar: () => set({ showSidebar: false }),
  toogleSidebar: () => set((state) => ({ showSidebar: !state.showSidebar })),

  showModal: false,
  openModal: () => set({ showModal: true }),
  closeModal: () => set({ showModal: false }),
  toogleModal: () => set((state) => ({ showModal: !state.showModal })),

  showModalTemplate: false,
  openModalTemplate: () => set({ showModalTemplate: true }),
  closeModalTemplate: () => set({ showModalTemplate: false }),

  showModalGame: false,
  openModalGame: () => set({ showModalGame: true }),
  closeModalGame: () => set({ showModalGame: false }),

  page: 'main',
  setPage: (page) => set({ page: page }),
}));

export default useAppStore;
