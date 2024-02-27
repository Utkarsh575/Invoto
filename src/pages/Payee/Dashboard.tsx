import axios from 'axios'
import { Table } from 'flowbite-react'
import { useEffect, useState } from 'react'

const PayeeDashboard = () => {
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
      <div className="overflow-x-auto text-[#ffff]">
        <Table className=" ">
          <Table.Head className="text-lg">
            <Table.HeadCell className="border-gray-700 bg-[#262732] text-white">
              Invoice name
            </Table.HeadCell>
            <Table.HeadCell className="border-gray-700 bg-[#262732] text-white">
              Amount
            </Table.HeadCell>
            <Table.HeadCell className="border-gray-700 bg-[#262732] text-white">
              Description
            </Table.HeadCell>
            <Table.HeadCell className="border-gray-700 bg-[#262732] text-white">
              Status
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className=" border-gray-700 bg-[#262732] text-white">
              <Table.Cell className="text-white whitespace-nowrap font-medium ">
                {tdata.name}
              </Table.Cell>
              <Table.Cell> {tdata.amt}</Table.Cell>
              <Table.Cell>{tdata.desc}</Table.Cell>
              <Table.Cell className={`${true ? 'text-yellow-300' : ''}`}>
                Pending
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  )
}

export default PayeeDashboard
