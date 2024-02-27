import React, { useState } from 'react'
import Login from './Login'
import Signup from './Signup'

const Auth = () => {
  let userType = localStorage.getItem('invoice-user')

  const [loginToggle, setLoginToggle] = useState<boolean>()
  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <h1>Auth</h1>
      <div className="-translate-y-2">
        {loginToggle ? <Login /> : <Signup />}
      </div>
      <button
        className=" w-3/12 px-10 py-3 bg-blue-500 rounded-md -translate-y-32"
        onClick={() => {
          setLoginToggle(!loginToggle)
        }}
      >
        {loginToggle ? 'Register' : 'Login'}
      </button>
    </div>
  )
}

export default Auth
