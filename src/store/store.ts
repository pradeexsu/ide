import { create } from "zustand";

interface Props {
  showIo: boolean;
  toggleShowIo: () => void;
  setShowIo: (value: boolean) => void;
  language: string;
  setLanguage: (value: string) => void;
  code: string;
  setCode: (value: string) => void;
  view: any;
  setView: (value: any) => void;
  input: string;
  setInput: (value: string) => void;
  output: string;
  setOutput: (value: string) => void;
  executing: boolean;
  setExecuting: (value: boolean) => void;
}

export const useStore = create<Props>((set) => ({
  showIo: false,
  toggleShowIo: () => set((state) => ({ showIo: !state.showIo })),
  setShowIo: (value) => set(() => ({ showIo: value })),
  language: "cpp",
  setLanguage: (value) => set(() => ({ language: value })),
  code: "",
  setCode: (value) => set(() => ({ code: value })),
  view: any,
  setView: (value) => set(() => ({ view: value })),
  input: "",
  setInput: (value) => set(() => ({ input: value })),
  output: "",
  setOutput: (value) => set(() => ({ output: value })),
  executing: false,
  setExecuting: (value) => set(() => ({ executing: value })),
}));
