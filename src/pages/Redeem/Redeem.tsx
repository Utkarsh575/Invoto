import { useEffect, useState } from 'react'
import { createSearchParams, Link, useNavigate } from 'react-router-dom'

import { Button, Divider } from '@mui/material'

import RedeemComplete from 'components/Redeem/RedeemComplete'
import RedeemConfirmationDialog from 'components/Redeem/RedeemConfirmationDialog'
import RedeemForm from 'components/Redeem/RedeemForm'
import TransactionDialog from 'components/TransactionDialog/TransactionDialog'
import { TX_HASH_KEY } from 'constants/index'
import {
  Transaction,
  TransactionStatus,
  TransactionType,
} from 'contexts/AppContext'
import { useQueryParam } from 'hooks/useQueryParam'
import { useTransactionPolling } from 'hooks/useTransactionPolling'
import axios from 'axios'
import { useInvoiceId } from 'contexts/store'

function Redeem() {
  const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] = useState(true)
  const [isTransactionDialogOpen, setIsTransactionDialogOpen] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [tdata, settdata] = useState<any>([])
  const invoiceId = useInvoiceId((state: any) => state.invoiceId)
  let { txHash, transaction, setSearchParams } = useQueryParam()
  // setSearchParams(
  //   '0x6c2f29dd657f0ea5a00b78f4c20619481e58aa4531dd8e4423c5c95f4984db4d'
  // )

  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('app-login-token')
    async function getTdata() {
      let res = await axios.get(
        `http://localhost:3001/invoices/65df8b8eaf51b08f664d10c1/transaction`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      console.log(res?.data)
      settdata(res?.data)
      transaction = res?.data
      console.log(transaction)
      transaction!['nextHash'] = ''
      console.log(transaction)
      if (transaction) {
        // transaction.type = "REDEEM"
        // if (transaction.type === TransactionType.SEND) {
        //   // If send tx is incomplete or signature is missing, redirect to Send page
        //   if (
        //     transaction.status !== TransactionStatus.COMPLETE ||
        //     transaction.signature == null
        //   ) {
        //     navigate(
        //       {
        //         pathname: '/',
        //         search: createSearchParams({
        //           [TX_HASH_KEY]: txHash,
        //         }).toString(),
        //       },
        //       {
        //         replace: true,
        //       }
        //     )
        //   } else if (
        //     transaction.status === TransactionStatus.COMPLETE &&
        //     transaction.signature != null
        //   ) {
        //     // If send tx doesn't have a nextHash, open Redeem confirmation modal
        //     if (transaction.nextHash == null) {
        //       setIsConfirmationDialogOpen(true)
        //       // If send tx has a nextHash, replace with redeem tx hash
        //     } else {
        //       setSearchParams(
        //         { [TX_HASH_KEY]: transaction.nextHash },
        //         { replace: true }
        //       )
        //     }
        //   }
        //   // If redeem tx is not complete, open Redeem transaction modal
        // } else
        // if (
        //   transaction.type === TransactionType.REDEEM &&
        //   transaction.status !== TransactionStatus.COMPLETE
        // ) {
        setIsTransactionDialogOpen(true)
        // }
        setIsLoading(true)
      }
      setSearchParams(res?.data.hash)
      txHash = res?.data.hash
      console.log(res?.data.hash)
      console.log(txHash)
    }
    getTdata()
  }, [])

  const handleNext = (txHash: string) => {
    setSearchParams({ [TX_HASH_KEY]: txHash }, { replace: true })
  }

  const handleConfirmation = (txHash: string) => {
    setSearchParams({ [TX_HASH_KEY]: txHash }, { replace: true })
    setIsConfirmationDialogOpen(false)
    setIsTransactionDialogOpen(true)
  }

  const handleComplete = () => {
    setIsTransactionDialogOpen(true)
  }

  const handleReturn = () => {
    navigate({
      pathname: '/',
    })
  }

  const { handleRedeemTransactionPolling } =
    useTransactionPolling(handleComplete)

  return (
    <>
      {/* <div className="item-center mx-auto flex max-w-4xl flex-col justify-center">
        {transaction &&
          transaction.type === TransactionType.REDEEM &&
          transaction.status === TransactionStatus.COMPLETE && (
            <RedeemComplete
              handleReturn={handleReturn}
              transaction={transaction}
            />
          )}

        {(transaction == null || transaction.type === TransactionType.SEND) && (
          <>
            <h1>Receive</h1>
            <p className="mt-8 text-center text-xl">
              Already sent? Type in the transaction hash below to continue.
            </p>
            <div className="m-24 flex flex-col">
              <RedeemForm handleNext={handleNext} transaction={transaction} />

              <Divider className="mt-12">OR</Divider>

              <Link to="/">
                <Button
                  className="mt-12"
                  color="secondary"
                  size="large"
                  fullWidth={true}
                >
                  RETURN TO TRANSFER
                </Button>
              </Link>
            </div>
          </>
        )}
      </div> */}

      {isLoading && (
        <>
          <div className='text-white'>transaction</div>
          {transaction && isConfirmationDialogOpen && (
            <RedeemConfirmationDialog
              handleClose={() => setIsConfirmationDialogOpen(false)}
              handleNext={handleConfirmation}
              open={isConfirmationDialogOpen}
              transaction={transaction}
            />
          )}

          {transaction && isTransactionDialogOpen && (
            <TransactionDialog
              handleTransactionPolling={handleRedeemTransactionPolling}
              open={isTransactionDialogOpen}
              transaction={transaction}
            />
          )}
        </>
      )}
    </>
  )
}

export default Redeem
