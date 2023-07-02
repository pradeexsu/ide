import { create } from "zustand";

export const useStore = create((set) => ({
  showIo: false,
  toggleShowIo: () => set((state) => ({ showIo: !state.showIo })),
  setShowIo: (value) => set(() => ({ showIo: value })),
  language: "cpp",
  setLanguage: (value) => set(() => ({ language: value })),
  code: "",
  setCode: (value) => set(() => ({ code: value })),
  view: null,
  setView: (value) => set(() => ({ view: value })),
  input: "",
  setInput: (value) => set(() => ({ input: value })),
  output: "",
  setOutput: (value) => set(() => ({ output: value })),
  executing: false,
  setExecuting: (value) => set(() => ({ executing: value })),
}));
