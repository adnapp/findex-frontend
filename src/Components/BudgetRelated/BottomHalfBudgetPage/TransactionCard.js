import React from 'react'


function TransactionCard({transaction, handleRemoveTransaction}){ //passing handleRemoveTransaction too far

    const {id, name, amount} = transaction 

    // console.log(transaction.category_id)

    return( 
        <div className="transaction-card-div">
            <p>{name}, ${amount.toFixed(2)}</p>
            <button 
                className="delete-transaction-btn" 
                data-id={id}
                onClick={() => handleRemoveTransaction(id)}
                >X
            </button>
        </div>
    )
}


export default TransactionCard