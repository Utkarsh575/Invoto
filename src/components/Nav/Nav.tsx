import { Link, useLocation } from 'react-router-dom'

import classnames from 'classnames'

// import logo from 'assets/logo.svg'
import ConnectWallet from 'components/ConnectWallet/ConnectWallet'

import type { RouteConfig } from 'pages/Router'
import Router from 'pages/Router'
import { useState, useEffect } from 'react'
import { Send, Redeem } from '@mui/icons-material'
import CreateInvoice from 'pages/Payee/CreateInvoice'
import Payee from 'pages/Payee/Payee'
import Payer from 'pages/Payer/Payer'
import Transactions from 'pages/Transactions/Transactions'
interface NavLinkProps {
  route: RouteConfig
}

function NavLink({ route }: NavLinkProps) {
  const location = useLocation()
  const isSelected = location.pathname === route.path

  return (
    <Link
      className={classnames('mr-12 font-semibold', {
        'text-white': isSelected,
        'text-licorice-200 hover:text-apple-200 focus:text-bazooka-200  hover:bg-transparent hover:shadow-xl':
          !isSelected,
      })}
      to={route.path}
    >
      {route.label}
    </Link>
  )
}

function Nav() {
  let userType = localStorage.getItem('invoice-user')
  let a = localStorage.getItem('invoice-user')

  const routes: RouteConfig[] = [
    {
      path: '/',
      label: 'Payer',
      component: a === 'payer' ? Payer : Payee,
      nav: true,
    },
    {
      path: '/create',
      label: 'Create Invoice',
      component: CreateInvoice,
      nav: a === 'payer' ? false : true,
    },
    {
      path: '/send',
      label: 'Transfer',
      component: Send,
      nav: a === 'payer' ? true : false,
    },
    {
      path: '/redeem',
      label: 'Redeem',
      component: Redeem,
      nav: a === 'payer' ? false : true,
    },
    {
      path: '/transactions',
      label: 'Transactions',
      component: Transactions,
      nav: a === 'payer' ? true : false,
    },
  ]

  // const [utype, setUType] = useState<string | null>('')
  // useEffect(() => {
  //   let userType = localStorage.getItem('invoice-user')
  //   setUType(userType)
  // }, [utype])

  return (
    <nav className="flex w-full flex-row items-center p-6">
      <Link className="flex flex-row items-center" to="/">
        <span className="ml-4 text-3xl font-bold text-white">INVOTO</span>
      </Link>

      <div className="ml-auto">
        {routes
          .filter((route) => route.nav)
          .map((route) => (
            <NavLink key={route.path} route={route} />
          ))}

        {/* {utype === 'payee' &&
          PayeeRoutes.filter((route) => route.nav).map((route) => (
            <NavLink key={route.path} route={route} />
          ))} */}

        <ConnectWallet />

        <button
          className="px-5 py-[0.4rem] rounded-md hover:bg-red-600 bg-red-500 border border-gray-500 ml-6"
          onClick={() => {
            localStorage.removeItem('app-login-token')
            // localStorage.removeItem("invoice-user")
            window.location.reload()
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  )
}

export default Nav
