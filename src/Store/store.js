import create from "zustand";

const useStore = create((set) => ({
  user: {},
  setUser: (data) => set((state) => ({ user: (state.user = data) })),
  articles: [],
  setArticles: (data) =>
    set((state) => ({ articles: [(state.articles = data)] })),
}));
