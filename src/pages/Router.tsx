import { BrowserRouter, Route, Routes } from 'react-router-dom'

import AppLayout from 'layouts/AppLayout'

import Payee from './Payee/Payee'
import Payer from './Payer/Payer'
import Redeem from './Redeem/Redeem'
import Send from './Send/Send'
import Transactions from './Transactions/Transactions'
import CreateInvoice from './Payee/CreateInvoice'
import { useUserType } from 'contexts/store'
export interface RouteConfig {
  path: string
  label: string
  component: React.ComponentType
  nav: boolean
}

export const routes: RouteConfig[] = [
  {
    path: '/',
    label: 'Payer',
    component: Payer,
    nav: true,
  },
  {
    path: '/payee',
    label: 'Payee',
    component: Payee,
    nav: true,
  },
  {
    path: '/create',
    label: 'Create Invoice',
    component: CreateInvoice,
    nav: true,
  },
  {
    path: '/send',
    label: 'Transfer',
    component: Send,
    nav: true,
  },
  {
    path: '/redeem',
    label: 'Redeem',
    component: Redeem,
    nav: false,
  },
  {
    path: '/transactions',
    label: 'Transactions',
    component: Transactions,
    nav: false,
  },
]

function AppRoutes() {
  return (
    <Routes>
      {routes.map((route) => {
        const Page = route.component
        return <Route key={route.path} path={route.path} element={<Page />} />
      })}
    </Routes>
  )
}

function Router() {
  return (
    <BrowserRouter>
      <AppLayout>
        <AppRoutes />
      </AppLayout>
    </BrowserRouter>
  )
}

export default Router
