import { User } from "@src/types";
import { create } from "zustand";

interface UserState {
  user: User;
  setUser: (newUser: User) => void;
  clearUser: () => void;
  isLogged: () => boolean;
}

const useUserStore = create<UserState>((set) => ({
  user: JSON.parse(localStorage.getItem("user") || "null") as User,
  setUser: (newUser: User) =>
    set(() => {
      localStorage.setItem("user", JSON.stringify(newUser));
      return { user: newUser };
    }),
  clearUser: () =>
    set(() => {
      localStorage.removeItem("user");
      return { user: undefined };
    }),
  isLogged: () => !!localStorage.getItem("user"),
}));

export default useUserStore;
