import axios from 'axios'
import { Table } from 'flowbite-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useInvoiceId } from 'contexts/store'

const PayeeDashboard = () => {
  const [tdata, settdata] = useState<any>([])
  const invoiceId = useInvoiceId((state: any) => state.invoiceId)
  const setInvoiceId = useInvoiceId((state: any) => state.setInvoiceId)
  const navigate = useNavigate()
  useEffect(() => {
    async function getTdata() {
      let res = await axios.get('http://localhost:3001/invoices')
      console.log(res?.data)
      settdata(res?.data)
    }
    getTdata()
  }, [])

  return (
    <div>
      <h5 className="font-semibold text-[#ABF2A2] text-4xl mb-5">
        Your Invoices
      </h5>
      <div className=" overflow-x-auto text-[#ffff] border-[#333235] rounded-md">
        <Table className="border-0 border-[#333235] rounded-lg ">
          <Table.Head className="text-lg rounded-md  border-2 border-[#333235]">
            <Table.HeadCell className=" bg-[#222222] text-[#43C484]">
              Invoice name
            </Table.HeadCell>
            <Table.HeadCell className=" bg-[#222222] text-[#43C484]">
              Amount
            </Table.HeadCell>
            <Table.HeadCell className=" bg-[#222222] text-[#43C484]">
              Description
            </Table.HeadCell>
            <Table.HeadCell className=" bg-[#222222] text-[#43C484]">
              Status
            </Table.HeadCell>
            <Table.HeadCell className=" bg-[#222222] text-[#43C484]"></Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {tdata.map((e: any, idx: number) => {
              return (
                <Table.Row
                  key={idx}
                  className=" border-[#333235] border-2 bg-[#222222] text-[#3BC484]"
                >
                  <Table.Cell className="text-white whitespace-nowrap font-medium ">
                    {e.invoice_name}
                  </Table.Cell>
                  <Table.Cell> {e.amount}</Table.Cell>
                  <Table.Cell>{e.invoice_description}</Table.Cell>
                  <Table.Cell className={`${true ? 'text-yellow-300' : ''}`}>
                    {e.status}
                  </Table.Cell>
                  <Table.Cell>
                    <button
                      className="px-7 py-2 text-black bg-[#43C484] rounded-md font-bold  hover:bg-[#3aa871] border border-[#333235]"
                      onClick={() => {
                        setInvoiceId(e._id)
                        navigate(`/redeem`)
                      }}
                    >
                      Redeem
                    </button>
                  </Table.Cell>
                </Table.Row>
              )
            })}
          </Table.Body>
        </Table>
      </div>
    </div>
  )
}

export default PayeeDashboard
