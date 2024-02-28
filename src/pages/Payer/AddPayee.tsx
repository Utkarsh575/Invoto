import { useState, useEffect } from 'react'
import { Button, Modal, Label, TextInput } from 'flowbite-react'
import axios from 'axios'

const AddPayee = () => {
  const [showForm, setShowForm] = useState<boolean>(false)
  const [formData, setFormData] = useState<any>({})

  const token = localStorage.getItem('app-login-token')
  const handleSubmit = async (e: any) => {
    e.preventDefault()

    let res = await axios.post(
      'http://localhost:3001/create-payee',

      formData,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    console.log(res)
    console.log(formData)
  }
  return (
    <>
      <div className="flex items-center justify-between">
        <h5 className="font-semibold text-[#ABF2A2] text-4xl mb-5">
          Your Invoices
        </h5>

        <button
          className="px-7 py-3 bg-[#3BC484] rounded-md font-bold mb-5 hover:bg-[#3aa871] border-[#333235]"
          onClick={() => {
            setShowForm(true)
          }}
        >
          Add Employee
        </button>
      </div>

      <Modal show={showForm} onClose={() => setShowForm(false)}>
        <form
          onSubmit={(e: any) => {
            handleSubmit(e)
          }}
          className="bg-[#222222] rounded-md"
        >
          <Modal.Header className="border-gray-400">
            <span className="text-white font-semibold text-lg">
              Create Employee
            </span>
          </Modal.Header>
          <Modal.Body className="border-gray-400">
            <div className="space-y-2">
              <p className="text-base leading-relaxed text-gray-300 dark:text-gray-400">
                The employee would be able to send invoice requests.
              </p>

              <div className="mb-2 block ">
                <Label
                  htmlFor="email"
                  value="Payee email"
                  className="text-white"
                />
              </div>
              <TextInput
                name="payee_email"
                type="text"
                placeholder=" Enter the payer email"
                required
                onChange={(e: any) => {
                  setFormData({ ...formData, email: e.target.value })
                }}
              />
            </div>
          </Modal.Body>
          <Modal.Footer className="flex items-center justify-center border-gray-400">
            <button
              type="submit"
              className="px-5 py-2 rounded-md border text-black border-gray-300 bg-[#3BC484] hover:bg-[#43C484] font-semibold"
              // onClick={() => setShowForm(false)}
            >
              Create
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  )
}

export default AddPayee
