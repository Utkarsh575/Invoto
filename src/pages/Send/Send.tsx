import { useEffect, useState } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'

import SendConfirmationDialog from 'components/Send/SendConfirmationDialog'
import SendForm, { DEFAULT_FORM_INPUTS } from 'components/Send/SendForm'
import TransactionDialog from 'components/TransactionDialog/TransactionDialog'
import { TX_HASH_KEY } from 'constants/index'
import { TransactionStatus, TransactionType } from 'contexts/AppContext'
import { useQueryParam } from 'hooks/useQueryParam'
import { useTransactionPolling } from 'hooks/useTransactionPolling'

import type { TransactionInputs } from 'contexts/AppContext'
import axios from 'axios'
import { useInvoiceId } from 'contexts/store'

function Send() {
  const [formInputs, setFormInputs] =
    useState<TransactionInputs>(DEFAULT_FORM_INPUTS)
  const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] =
    useState(false)
  const [isTransactionDialogOpen, setIsTransactionDialogOpen] = useState(false)
  const { txHash, transaction, setSearchParams } = useQueryParam()
  const navigate = useNavigate()

  const invoiceId = useInvoiceId((state: any) => state.invoiceId)
  useEffect(() => {
    // Redirect to Redeem page if send tx is complete and signature is fetched or it's a redeem tx
    if (
      transaction &&
      ((transaction.type === TransactionType.SEND &&
        transaction.status === TransactionStatus.COMPLETE &&
        transaction.signature != null) ||
        transaction.type === TransactionType.REDEEM)
    ) {
      console.log(transaction)
      const token = localStorage.getItem('app-login-token')
      const handleinvoicepay = async () => {
        let res = await axios.put(
          `http://localhost:3001/invoices/${invoiceId}/pay`,
          transaction,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )

        console.log(res)
        window.location.href = "http://localhost:3000/"
      }

      handleinvoicepay()
      // navigate(
      //   {
      //     pathname: '/redeem',
      //     search: createSearchParams({
      //       [TX_HASH_KEY]: txHash,
      //     }).toString(),
      //   },
      //   {
      //     replace: true,
      //   }
      // )
    } else if (txHash) {
      setIsTransactionDialogOpen(true)
    }
  }, [navigate, transaction, txHash])

  const handleNext = () => {
    setIsConfirmationDialogOpen(true)
  }

  const handleConfirmation = (txHash: string) => {
    setIsConfirmationDialogOpen(false)
    setSearchParams({ [TX_HASH_KEY]: txHash }, { replace: true })
    setIsTransactionDialogOpen(true)
  }

  const handleComplete = () => {
    setIsTransactionDialogOpen(false)
    // navigate({
    //   pathname: '/redeem',
    //   search: createSearchParams({
    //     [TX_HASH_KEY]: txHash,
    //   }).toString(),
    // })
  }

  const { handleSendTransactionPolling } = useTransactionPolling(handleComplete)

  return (
    <div className='h-[59vh]'>
      <div className="item-center mx-auto flex max-w-4xl flex-col justify-center bg-[#222222] border-2 border-[#333235] p-5 -translate-y-12 rounded-md text-white  overflow-hidden">
      <h5 className="font-semibold text-[#ABF2A2] text-5xl mb-2 text-center mt-2">
        Pay your Invoices Cross Chain
      </h5>

        <div className="mx-10 my-5  p-5 flex flex-col ">
          <SendForm
            handleNext={handleNext}
            formInputs={formInputs}
            handleUpdateForm={setFormInputs}
          />
        </div>
      </div>

      {isConfirmationDialogOpen && (
        <SendConfirmationDialog
          handleClose={() => setIsConfirmationDialogOpen(false)}
          handleNext={handleConfirmation}
          open={isConfirmationDialogOpen}
          formInputs={formInputs}
        />
      )}

      {transaction && isTransactionDialogOpen && (
        <TransactionDialog
          handleTransactionPolling={handleSendTransactionPolling}
          open={isTransactionDialogOpen}
          transaction={transaction}
        />
      )}
    </div>
  )
}

export default Send
