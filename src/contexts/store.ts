import { create } from 'zustand'

export const useUserType = create((set: any) => ({
  userType: '',
  setUserType: (userType: any) => {
    set({ userType })
  },
}))

export const useInvoiceId = create((set: any) => ({
  invoiceId: '',
  setInvoiceId: (invoiceId: any) => {
    set({ invoiceId })
  },
}))
