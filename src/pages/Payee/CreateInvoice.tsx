import { Button, Checkbox, Label, TextInput } from 'flowbite-react'

const CreateInvoice = () => {
  return (
    <>
      <div className="h-full text-3xl font-bold text-white -translate-y-[100%]">
        <h1>Create Invoice</h1>
      </div>

      <div className="p-0 flex items-center justify-center w-full  text-white translate-y-[-10%]">
        <form className="flex w-6/12 flex-col gap-4 p-5 bg-[#262732] rounded-md shadow-md ">
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
                    id="invoice_description"
                    type="text"
                    placeholder=" Enter the invoice amount"
                    required
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
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="amount"
                    value="Wallet Address"
                    className="text-white"
                  />
                </div>
                <TextInput
                  id="wallet_address"
                  type="text"
                  placeholder=" Enter the receiving wallet address"
                  required
                />
              </div>
            </div>
          </div>
          <Button className="bg-green-500" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </>
  )
}

export default CreateInvoice
