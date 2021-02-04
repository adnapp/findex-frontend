import React from 'react'
import TransactionList from './TransactionList'


function TransactionContainer({selectedMonthData}){


    const transactions = selectedMonthData[0].transactions

    return( 
        <>
        <div className="transaction-container">
            
             <TransactionList transactions={transactions}/>

        </div>
        </>
    )
}


export default TransactionContainer