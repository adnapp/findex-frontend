import React from 'react'


function TransactionCard({transaction}){

    const {id, name, amount, type} = transaction 



    return( 
        <div className="transaction-card-div">
            <p>{name}, -${amount}</p>
        </div>
    )
}


export default TransactionCard