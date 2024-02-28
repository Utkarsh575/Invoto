import React, { useState } from 'react'
import Login from './Login'
import Signup from './Signup'

const Auth = () => {
  let userType = localStorage.getItem('invoice-user')

  const [loginToggle, setLoginToggle] = useState<boolean>()
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] overflow-hidden">
      <div className="-translate-y-2">
        <h1 className="translate-y-[8rem]">welcome to Invoto</h1>

        {loginToggle ? <Login /> : <Signup />}
      </div>
      <button
        className=" w-[20rem] px-10 py-2 whitespace-nowrap h-full bg-black text-white font-semibold rounded-md -translate-y-[10rem]"
        onClick={() => {
          setLoginToggle(!loginToggle)
        }}
      >
        {loginToggle ? 'Dont have an account ? Register' : 'Have an Account ? Login'}
      </button>
    </div>
  )
}

export default Auth
