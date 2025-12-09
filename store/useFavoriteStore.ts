import { create } from "zustand";
import { toast } from "sonner";

export type FavoriteCharacter = {
  id: number;
  name: string;
  image: string;
  status: string;
  location: {
    name: string;
  };
};

type FavoriteStore = {
  favorites: FavoriteCharacter[];
  addFavorite: (character: FavoriteCharacter) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
  loadFavorites: () => void;
};

export const useFavoriteStore = create<FavoriteStore>((set, get) => ({
  favorites: [],

  loadFavorites: () => {
    const saved = localStorage.getItem("favorites");
    if (saved) {
      set({ favorites: JSON.parse(saved) });
    }
  },

  addFavorite: (character) => {
    const exists = get().favorites.some((c) => c.id === character.id);
    if (exists) return;

    const updated = [...get().favorites, character];

    set({ favorites: updated });
    localStorage.setItem("favorites", JSON.stringify(updated));
    toast.success("Success Add To Favorite", {
      position: "top-right",
      style: {
        backgroundColor: "#16a34a",
        color: "white",
      },
    });
  },

  removeFavorite: (id) => {
    const updated = get().favorites.filter((c) => c.id !== id);

    set({ favorites: updated });
    localStorage.setItem("favorites", JSON.stringify(updated));
    toast.success("Success Remove From Favorite", {
      position: "top-right",
      style: {
        backgroundColor: "#16a34a",
        color: "white",
      },
    });
  },

  isFavorite: (id) => {
    return get().favorites.some((c) => c.id === id);
  },
}));
