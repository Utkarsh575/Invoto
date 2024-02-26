import axios from 'axios'
import { Table } from 'flowbite-react'
import { useEffect, useState } from 'react'

const Dashboard = () => {
  const [tdata, settdata] = useState<any>([])

  useEffect(() => {
    async function getTdata() {
      fetch('https://musical-worthy-pheasant.ngrok-free.app/getInvoice', {
        method: 'get',
        headers: new Headers({
          'ngrok-skip-browser-warning': '69420',
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          settdata(data.body)
        })
        .catch((err) => console.log(err))

      //   console.log(res)
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

export default Dashboard
