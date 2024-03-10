import create from "zustand";

export const useUserStore = create((set) => ({
  id: "",
  name: "",
  username: "",
  loading: false,
  setId: (id) => set(() => ({ id })),
  setName: (name) => set(() => ({ name })),
  setUsername: (username) => set(() => ({ username })),
  setLoading: (loading) => set(() => ({ loading })),
}));
