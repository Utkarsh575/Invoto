import { useEffect, useState } from 'react'
import { createSearchParams, Link, useNavigate } from 'react-router-dom'

import { Button, Divider } from '@mui/material'

import RedeemComplete from 'components/Redeem/RedeemComplete'
import RedeemConfirmationDialog from 'components/Redeem/RedeemConfirmationDialog'
import RedeemForm from 'components/Redeem/RedeemForm'
import TransactionDialog from 'components/TransactionDialog/TransactionDialog'
import { TX_HASH_KEY } from 'constants/index'
import { Transaction, TransactionStatus, TransactionType } from 'contexts/AppContext'
import { useQueryParam } from 'hooks/useQueryParam'
import { useTransactionPolling } from 'hooks/useTransactionPolling'

function Redeem() {
  const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] =
    useState(true)
  const [isTransactionDialogOpen, setIsTransactionDialogOpen] = useState(false)
  const {
    txHash,
    transaction = {
      source: 'ETH',
      target: 'ARB',
      address: '0xc9501D1Eb0306765e4cc9302981f99d218F0036a',
      amount: '1',
      hash: '0x6c2f29dd657f0ea5a00b78f4c20619481e58aa4531dd8e4423c5c95f4984db4d',
      type: 'SEND',
      status: 'COMPLETE',
      messageBytes:
        '0x000000000000000000000003000000000003ed0a0000000000000000000000009f3b8679c73c2fef8b59b4f3444d4e156fb70aa50000000000000000000000009f3b8679c73c2fef8b59b4f3444d4e156fb70aa50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001c7d4b196cb0c7b01d743fbc6116a902379c7238000000000000000000000000c9501d1eb0306765e4cc9302981f99d218f0036a00000000000000000000000000000000000000000000000000000000000f42400000000000000000000000004c55eda7e6bc090e60635421b8b43a065927897c',
      messageHash:
        '0x20a848ca5e8531143344b250784073b6f8387fd1269ebb4f8e72b3d3ef3b8ce3',
      signature:
        '0x2fa53a29c95e902205ba36cf6dfcd0fb7574b86dd998721693ab90cb670712b9466634f4316a4c635700e8011b3c1000ff572bc4b4290452586331860880e7291ca08c26be603425b29a6ebfdaf9f86e429fb1f3d08de9262bd90a6555b7047b8c568797e3889cad21bb3f37ab0fba451608da7745ec4356da4451d0f10bcded2f1b',
        nextHash:""
    } as any,
    setSearchParams,
  } = useQueryParam()
  setSearchParams(
    '0x6c2f29dd657f0ea5a00b78f4c20619481e58aa4531dd8e4423c5c95f4984db4d'
  )

  const navigate = useNavigate()

  useEffect(() => {
    if (transaction) {
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
       if (
        transaction.type === TransactionType.REDEEM &&
        transaction.status !== TransactionStatus.COMPLETE
      
      ) {
        setIsTransactionDialogOpen(true)
      }
    }
    setSearchParams(
      '0x6c2f29dd657f0ea5a00b78f4c20619481e58aa4531dd8e4423c5c95f4984db4d'
    )
    console.log(txHash)
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
    setIsTransactionDialogOpen(false)
  }

  const handleReturn = () => {
    navigate({
      pathname: '/',
    })
  }

  const { handleRedeemTransactionPolling } =
    useTransactionPolling(handleComplete)
  console.log(txHash)

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
  )
}

export default Redeem
