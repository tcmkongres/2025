import create from "zustand";

const useStore = create((set) => ({
    language: "pl",
    setLanguage: (lang) => set({ language: lang }),
}));

export default useStore;