import { create } from "zustand";
import { persist } from "zustand/middleware";

type Username = string;

interface UserState {
  usernames: Username[];
  addUsername: (username: Username) => void;
  removeUsername: (username: Username) => void;
}

export const userStore = create<UserState>()(
  persist(
    (set) => ({
      usernames: [],
      addUsername: (username) =>
        set((state) => ({ usernames: [...state.usernames, username] })),
      removeUsername: (username) =>
        set((state) => ({
          usernames: state.usernames.filter((name) => name !== username),
        })),
    }),
    { name: "userStore" }
  )
);
