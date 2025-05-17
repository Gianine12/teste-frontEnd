import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useUserToggleStore = create(
  persist(
    (set, get) => ({
      toggledUsers: {},

      toggleUser: (id) => {
        const current = get().toggledUsers[id];
        set((state) => ({
          toggledUsers: {
            ...state.toggledUsers,
            [id]: !current,
          },
        }));
      },

      isUserEnabled: (id) => {
        const toggled = get().toggledUsers[id];
        return toggled !== false;
      },
    }),
    {
      name: 'user-toggle-storage',
    }
  )
);
