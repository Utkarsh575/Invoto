import axios from 'axios'
import Nav from 'components/Nav/Nav'
import PageLayout from 'layouts/PageLayout'
import Auth from 'pages/Login/Auth'
import Login from 'pages/Login/Login'
import { useEffect, useState } from 'react'
interface AppLayoutProps {
  children: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const token = localStorage.getItem('app-login-token')
  
  return (
    <div className="flex min-h-screen flex-col">
      {token && token?.length > 0 ? (
        <>
          <Nav />
          <main className="flex-1">
            <PageLayout>{children}</PageLayout>
          </main>
        </>
      ) : (
        <>
          <Auth />
        </>
      )}
    </div>
  )
}

export default AppLayout
