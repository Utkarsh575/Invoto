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
import PayeeDashboard from 'pages/Payee/Dashboard'
import Transactions from 'pages/Transactions/Transactions'
import { useUserType } from 'contexts/store'
interface NavLinkProps {
  route: RouteConfig
}

function NavLink({ route }: any) {
  const location = useLocation()
  const isSelected = location.pathname === route.path

  return (
    <Link
      className={classnames('mr-12 text-lg font-bold', {
        'text-apple-200': isSelected,
        'text-licorice-200  focus:text-bazooka-200  hover:bg-transparent hover:shadow-xl':
          !isSelected,
      })}
      to={route.path}
    >
      {route.label}
    </Link>
  )
}

function Nav() {
  // let userType = localStorage.getItem('invoice-user')
  // let a = localStorage.getItem('invoice-user')
  const userType = useUserType((state: any) => state.userType)
  const setUserType = useUserType((state: any) => state.setUserType)

  useEffect(() => {
    let localUserType = localStorage.getItem('invoice-user')

    setUserType(localUserType!.replace(/['"]+/g, ''))

    console.log('after setting', userType)
  }, [])
  console.log('zustand', userType)

  // const routes: RouteConfig[] = [
  //   {
  //     path: '/',
  //     label: 'Payer',
  //     component: userType === 'payer' ? Payer : Payee,
  //     nav: true,
  //   },
  //   {
  //     path: '/create',
  //     label: 'Create Invoice',
  //     component: CreateInvoice,
  //     nav: userType === 'payer' ? false : true,
  //   },
  //   {
  //     path: '/send',
  //     label: 'Transfer',
  //     component: Send,
  //     nav: userType === 'payer' ? true : false,
  //   },
  //   {
  //     path: '/redeem',
  //     label: 'Redeem',
  //     component: Redeem,
  //     nav: userType === 'payer' ? false : true,
  //   },
  //   {
  //     path: '/transactions',
  //     label: 'Transactions',
  //     component: Transactions,
  //     nav: userType === 'payer' ? true : false,
  //   },
  // ]

  // const [utype, setUType] = useState<string | null>('')
  // useEffect(() => {
  //   let userType = localStorage.getItem('invoice-user')
  //   setUType(userType)
  // }, [utype])

  return (
    <nav className="flex w-full flex-row items-center p-6">
      <Link className="flex flex-row items-center" to="/">
        <span className="ml-4 text-3xl font-bold text-[#ABF2A2]">INVOTO</span>
      </Link>

      <div className="ml-auto">
        {/* {routes
          .filter((route) => route.nav)
          .map((route) => (
            <NavLink key={route.path} route={route} />
          ))} */}
        {userType === 'payer' && (
          <NavLink
            route={{
              path: '/',
              label: 'Payer',
              component: Payer,
              nav: userType === 'payer' ? true : false,
            }}
          />
        )}

        {userType === 'payee' && (
          <NavLink
            route={{
              path: '/payee',
              label: 'Payee',
              component: Payee,
              nav: userType === 'payee' ? true : false,
            }}
          />
        )}

        {userType === 'payee' && (
          <NavLink
            route={{
              path: '/create',
              label: 'Create Invoice',
              component: CreateInvoice,
              nav: userType === 'payer' ? false : true,
            }}
          />
        )}
        {userType === 'payer' && (
          <NavLink
            route={{
              path: '/send',
              label: 'Transfer',
              component: Send,
              nav: userType === 'payer' ? true : false,
            }}
          />
        )}
        {userType === 'payee' && (
          <NavLink
            route={{
              path: '/redeem',
              label: 'Redeem',
              component: Redeem,
              nav: userType === 'payer' ? false : true,
            }}
          />
        )}
        {userType === 'payer' && (
          <NavLink
            route={{
              path: '/transactions',
              label: 'Transactions',
              component: Transactions,
              nav: userType === 'payer' ? true : false,
            }}
          />
        )}

        <ConnectWallet />

        <button
          className="px-5 py-[0.4rem] rounded-md hover:bg-red-600 bg-red-500 border border-[#333235] hover:border-[#333235] ml-6 font-semibold"
          onClick={() => {
            localStorage.removeItem('app-login-token')
            setUserType('')
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
