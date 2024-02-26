import { Table } from 'flowbite-react'
const Dashboard = () => {
  return (
    <div>
      <div className="overflow-x-auto text-[#ffff]">
        <Table className=" ">
          <Table.Head className="text-lg">
            <Table.HeadCell className="border-gray-700 bg-[#262732] text-white">
              Invoice name
            </Table.HeadCell>
            <Table.HeadCell className="border-gray-700 bg-[#262732] text-white">
              Invoice Amount
            </Table.HeadCell>
            <Table.HeadCell className="border-gray-700 bg-[#262732] text-white">
              Invoice createdAt
            </Table.HeadCell>
            <Table.HeadCell className="border-gray-700 bg-[#262732] text-white">
              Invoice Status
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className=" border-gray-700 bg-[#262732] text-white">
              <Table.Cell className="text-white whitespace-nowrap font-medium ">
                Design Project
              </Table.Cell>
              <Table.Cell>200 USDC</Table.Cell>
              <Table.Cell>13/2/24</Table.Cell>
              <Table.Cell className={`${true ? 'text-yellow-300' : ''}`}>
                Pending
              </Table.Cell>
            </Table.Row>
            <Table.Row className=" border-gray-700 bg-[#262732] text-white">
              <Table.Cell className="text-white whitespace-nowrap font-medium ">
                Development Project
              </Table.Cell>
              <Table.Cell>500 USDC</Table.Cell>
              <Table.Cell>17/2/24</Table.Cell>
              <Table.Cell className={`${true ? 'text-green-300' : ''}`}>
                Paid
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  )
}

export default Dashboard
