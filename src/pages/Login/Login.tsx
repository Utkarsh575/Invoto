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

function Login() {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <Card href="#" className="max-w-sm">
        <h5 className="flex justify-center w-[100%] text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Login
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          We're building a new internet financial system
        </p>
        <form className="flex max-w-md flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" type="password" required />
          </div>
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="role" value="Select your role" />
            </div>
            <Select id="role" required>
              <option>Payee</option>
              <option>Payer</option>
            </Select>
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
