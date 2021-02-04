import React from 'react'
import Search from './Search'
import TransactionCard from './TransactionCard'


function TransactionList(){

    return( 
        <>
        <div className="transaction-list-div">
            <Search/>
            <TransactionCard/>
            <TransactionCard/>

            <TransactionCard/>

        </div>
        </>
    )
}


export default TransactionList