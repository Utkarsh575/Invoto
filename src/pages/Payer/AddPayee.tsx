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
      'http:/localhost:3001/create-payee',

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
      <button
        className="px-7 py-3 bg-blue-400 rounded-md font-bold mb-5 hover:bg-blue-500 border border-gray-300"
        onClick={() => {
          setShowForm(true)
        }}
      >
        Create Employee
      </button>

      <Modal show={showForm} onClose={() => setShowForm(false)}>
        <form
          onSubmit={(e: any) => {
            handleSubmit(e)
          }}
        >
          <Modal.Header>Create Employee</Modal.Header>
          <Modal.Body>
            <div className="space-y-2">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
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
          <Modal.Footer className="flex items-center justify-center">
            <button
              type="submit"
              className="px-5 py-2 rounded-md border text-white border-gray-300 bg-green-500 hover:bg-green-600 font-semibold"
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
