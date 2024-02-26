import { Button, Checkbox, Label, TextInput } from 'flowbite-react'

const CreateInvoice = () => {
  return (
    <>
      <div className="h-full text-3xl font-bold text-white translate-y-[-100%]">
        Create Invoice
      </div>

      <div className="p-10 flex items-center justify-center w-full  text-white translate-y-[-10%]">
        <form className="flex w-6/12 flex-col gap-4 p-5 bg-white rounded-md shadow-md">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Invoice Name" />
            </div>
            <TextInput
              name="invoice_name"
              type="text"
              placeholder="enter the invoice name"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="description" value="Invoice Description" />
            </div>
            <TextInput
              id="invoice_description"
              type="text"
              placeholder="Enter the invoice description"
              required
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="amount" value="Invoice Amount" />
            </div>
            <TextInput
              id="invoice_description"
              type="text"
              placeholder="enter the invoice amount"
              required
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="amount" value="Wallet Address" />
            </div>
            <TextInput
              id="wallet_address"
              type="text"
              placeholder="enter the receiving wallet address"
              required
            />
          </div>

          <Button className="bg-green-400" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </>
  )
}

export default CreateInvoice
