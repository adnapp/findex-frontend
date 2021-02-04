import React from 'react'
import Search from './Search'
import TransactionCard from './TransactionCard'


function TransactionList({transactions}){


    const transactionsObj = transactions.map((transaction=> {
        return <TransactionCard transaction={transaction}/>
    }))


    console.log(transactions)
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