import { create } from "zustand";

export const useStore = create((set) => ({
  showIo: false,
  toggleShowIo: () => set((state) => ({ showIo: !state.showIo })),
}));
