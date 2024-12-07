import { create } from "zustand";

interface FavoritesState {
  favorites: Array<string>
  set: (by: Array<string>) => void
}

export const useStoreFavorites = create<FavoritesState>((set) => ({
  favorites: [],
  set: (by) => set({ favorites: by })
}));