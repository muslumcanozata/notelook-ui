import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set, get) => ({
      token: null,
      setToken: (token) => set({ token }),
      logout: () => set({ token: null }),
    }),
    {
      name: "@auth",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;
