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

function Send() {
  const [formInputs, setFormInputs] =
    useState<TransactionInputs>(DEFAULT_FORM_INPUTS)
  const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] =
    useState(false)
  const [isTransactionDialogOpen, setIsTransactionDialogOpen] = useState(false)
  const { txHash, transaction, setSearchParams } = useQueryParam()
  const navigate = useNavigate()

  useEffect(() => {
    // Redirect to Redeem page if send tx is complete and signature is fetched or it's a redeem tx
    if (
      transaction &&
      ((transaction.type === TransactionType.SEND &&
        transaction.status === TransactionStatus.COMPLETE &&
        transaction.signature != null) ||
        transaction.type === TransactionType.REDEEM)
    ) {
      navigate(
        {
          pathname: '/redeem',
          search: createSearchParams({
            [TX_HASH_KEY]: txHash,
          }).toString(),
        },
        {
          replace: true,
        }
      )
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
    navigate({
      pathname: '/redeem',
      search: createSearchParams({
        [TX_HASH_KEY]: txHash,
      }).toString(),
    })
  }

  const { handleSendTransactionPolling } = useTransactionPolling(handleComplete)

  return (
    <>
      <div className="item-center mx-auto flex max-w-4xl flex-col justify-center bg-[#262732] p-5 -translate-y-12 rounded-md text-white  ">
        <h1>Pay your Invoices across chains</h1>

        <div className="m-10 flex flex-col">
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
    </>
  )
}

export default Send
