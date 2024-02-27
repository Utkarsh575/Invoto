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

function Signup() {
  const [token, setToken] = useState<any>()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    let res = await axios.post('http://localhost:3000/create-payer', {
      email: 'okay@gmail.com',
      password: '123456789',
    })
    setToken(res.data.token)
    console.log(res)
    localStorage.setItem('app-login-token', JSON.stringify(token))
    localStorage.setItem('invoice-user', 'Payer')
  }

  // useEffect(() => {}, [token])
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <Card href="#" className="max-w-sm">
        <h5 className="flex justify-center w-[100%] text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
         Payer Signup
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          We're building a new internet financial system
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
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" type="password" required />
          </div>
        
          <Button className="bg-black" type="submit">
            Submit
          </Button>
        </form>
      </Card>
    </div>
  )
}

export default Signup
