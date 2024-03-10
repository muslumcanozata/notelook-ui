import create from "zustand";

export const useModalStore = create((set) => ({
  isOpen: false,
  id: null,
  onOpen: (id) => set(() => ({ isOpen: true, id })),
  onClose: () => set(() => ({ isOpen: false, id: null })),
}));
