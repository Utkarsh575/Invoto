import axios from 'axios'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react'
import { useState } from 'react'

const CreateInvoice = () => {
  const [formData, setFormData] = useState<any>({})
  const [walletData, setWalletData] = useState<any>({})
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    console.log(e.target.value)
    formData.wallet_address = walletData
    console.log(formData)

    const token = localStorage.getItem('app-login-token')
    let res = await axios.post(
      'http://localhost:3001/invoices',formData,     
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )

    console.log(res)
  }

  return (
    <>
      <div className="h-full text-3xl font-bold text-white -translate-y-[100%]">
        <h1 className="bg-[#43C484]">Create Invoice</h1>
      </div>

      <div className="p-0 flex items-center justify-center w-full  text-white translate-y-[-10%]">
        <form
          className="flex w-6/12 flex-col gap-4 p-5 bg-[#222222] rounded-md shadow-md "
          onSubmit={(e: any) => {
            handleSubmit(e)
          }}
        >
          <div className="flex flex-row justify-between gap-10 items-start ">
            <div className="flex flex-col w-1/2">
              <div className="mb-2 block ">
                <Label
                  htmlFor="email1"
                  value="Payer email"
                  className="text-white"
                />
              </div>
              <TextInput
                name="payer_email"
                type="text"
                placeholder=" Enter the payer email"
                required
                onChange={(e: any) => {
                  setFormData({ ...formData, payerEmail: e.target.value })
                }}
              />
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="email1"
                    value="Invoice Name"
                    className="text-white"
                  />
                </div>
                <TextInput
                  name="invoice_name"
                  type="text"
                  placeholder=" Enter the invoice name"
                  required
                  onChange={(e: any) => {
                    setFormData({ ...formData, invoice_name: e.target.value })
                  }}
                />
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="description"
                      value="Invoice Description"
                      className="text-white"
                    />
                  </div>
                  <TextInput
                    id="invoice_description"
                    type="text"
                    placeholder=" Enter the invoice description"
                    required
                    onChange={(e: any) => {
                      setFormData({ ...formData, invoice_description: e.target.value })
                    }}
                  />
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="amount"
                      value="Invoice Amount"
                      className="text-white"
                    />
                  </div>
                  <TextInput
                    id="invoice_amt"
                    type="text"
                    placeholder=" Enter the invoice amount"
                    required
                    onChange={(e: any) => {
                      setFormData({ ...formData, amount: e.target.value })
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col w-1/2">
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="email1"
                    value="Receiving Chain Name"
                    className="text-white"
                  />
                </div>
                <TextInput
                  name="chain_name"
                  type="text"
                  placeholder=" Enter the chain name"
                  required
                  onChange={(e: any) => {
                    setWalletData({ ...walletData, chain_name: e.target.value })
                  }}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="email1"
                    value="Receiving Chain ID"
                    className="text-white"
                  />
                </div>
                <TextInput
                  name="chain_id"
                  type="text"
                  placeholder=" Enter the chain id"
                  required
                  onChange={(e: any) => {
                    setWalletData({ ...walletData, chain_number: e.target.value })
                  }}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="addr"
                    value="Wallet Address"
                    className="text-white"
                  />
                </div>
                <TextInput
                  id="wallet_address"
                  type="text"
                  placeholder=" Enter the receiving wallet address"
                  required
                  onChange={(e: any) => {
                    setWalletData({ ...walletData, address: e.target.value })
                  }}
                />
              </div>
            </div>
          </div>
          <Button className="bg-[#3BC484] " type="submit">
            <span className="font-bold text-lg text-black">Submit</span>
          </Button>
        </form>
      </div>
    </>
  )
}

export default CreateInvoice
