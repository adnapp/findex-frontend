import React from 'react'
import Search from './Search'
import TransactionCard from './TransactionCard'


function TransactionList({transactions, handleRemoveTransaction}){


    const transactionsObj = transactions.map((transaction=> {
        return <TransactionCard key={transaction.id} transaction={transaction} handleRemoveTransaction={handleRemoveTransaction}/>
    }))


    // console.log(transactions)
    return( 
        <>
        <div className="transaction-list-div">
            <Search/>
            <h3>Transactions:</h3>
            {transactionsObj}
            

        </div>
        </>
    )
}


export default TransactionList