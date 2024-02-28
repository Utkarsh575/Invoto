import { create } from 'zustand'

export const useUserType = create((set: any) => ({
  userType: '',
  setUserType: (userType: any) => {
    set({ userType })
  },
}))
