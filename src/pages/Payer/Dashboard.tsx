import { useState, useEffect } from 'react'
import { Table } from 'flowbite-react'
import axios from 'axios'

const PayerDashboard = () => {
  const [tdata, settdata] = useState<any>([])

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
      <div className="overflow-x-auto text-[#ffff] border-[#333235] rounded-md">
        <Table className=" border-0 border-[#333235] rounded-lg">
          <Table.Head className="text-lg rounded-md  border-2 border-[#333235] ">
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
                </Table.Row>
              )
            })}
          </Table.Body>
        </Table>
      </div>
    </div>
  )
}

export default PayerDashboard
