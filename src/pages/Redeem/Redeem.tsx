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
import { useInvoiceId, useTransactionStore } from 'contexts/store'

function Redeem() {
  const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] = useState(true)
  const [isTransactionDialogOpen, setIsTransactionDialogOpen] = useState(true)
  // const [isLoading, setIsLoading] = useState(false)
  const transactData = useTransactionStore((state: any) => state.transactData)

  const [tdata, settdata] = useState<any>([])
  const invoiceId = useInvoiceId((state: any) => state.invoiceId)

  let {
    txHash,
    transaction = transactData as any,
    setSearchParams,
  } = useQueryParam()
  setSearchParams(transactData['hash'])

  const navigate = useNavigate()

  useEffect(() => {
    console.log('use effect transaction', transaction)

    if (transaction) {
      if (
        transaction.type === TransactionType.REDEEM &&
        transaction.status !== TransactionStatus.COMPLETE
      ) {
        setIsTransactionDialogOpen(true)
      }
      setSearchParams(transactData['hash'])

      // txHash = res?.data.hash
      txHash = transactData['hash']
      console.log('use effect txhash', txHash)

      // setIsLoading(true)
    }
  }, [navigate, setSearchParams, transaction, txHash])

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
      <div className="text-white">transaction</div>
      {transaction && isConfirmationDialogOpen && (
        <RedeemConfirmationDialog
          handleClose={() => setIsConfirmationDialogOpen(false)}
          handleNext={handleConfirmation}
          open={isConfirmationDialogOpen}
          transaction={transaction}
        />
      )}

      {/* {transaction && isTransactionDialogOpen && (
        <TransactionDialog
          handleTransactionPolling={handleRedeemTransactionPolling}
          open={isTransactionDialogOpen}
          transaction={transaction}
        />
      )} */}
    </>
  )
}

export default Redeem
