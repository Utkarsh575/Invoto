import axios from 'axios'
import { Card } from 'flowbite-react'
import {
  Button,
  Checkbox,
  FileInput,
  Label,
  Radio,
  RangeSlider,
  Select,
  Textarea,
  TextInput,
  ToggleSwitch,
} from 'flowbite-react'
import { useEffect, useState } from 'react'
import { useUserType } from 'contexts/store'

function Login() {
  const [token, setToken] = useState<any>()
  const [invoiceuser, setInvoiceUser] = useState<any>()
  const [formData, setFormData] = useState<any>({})
  const userType = useUserType((state: any) => state.userType)
  const setUserType = useUserType((state: any) => state.setUserType)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    console.log(formData)
    let res = await axios.post('http://localhost:3001/login', formData)
    setToken(res.data.token)
    setInvoiceUser(res.data.role)
    console.log(res)
    localStorage.setItem('app-login-token', JSON.stringify(res.data.token))
    localStorage.setItem('invoice-user', JSON.stringify(res.data.role))
    console.log(userType)
    console.log(res.data.role)
    // setUserType(res.data.role)
    if (res.data.role === 'payer') {
      window.location.reload()
    } else {
      window.location.href = 'http://localhost:3000/payee'
    }

    // console.log("zustand state",userType)
  }

  // useEffect(() => {}, [token])
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <Card href="#" className="max-w-sm">
        <h5 className="flex justify-center w-[100%] text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Login
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          We're building a Cross Chain Invoicing system.
        </p>
        <form
          className="flex max-w-md flex-col gap-4"
          onSubmit={(e: any) => {
            handleSubmit(e)
          }}
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@invoto.com"
              required
              onChange={(e: any) => {
                setFormData({ ...formData, email: e.target.value })
              }}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput
              id="password1"
              type="password"
              required
              onChange={(e: any) => {
                setFormData({ ...formData, password: e.target.value })
              }}
            />
          </div>
          <Button className="bg-black" type="submit">
            Submit
          </Button>
        </form>
      </Card>
    </div>
  )
}

export default Login
