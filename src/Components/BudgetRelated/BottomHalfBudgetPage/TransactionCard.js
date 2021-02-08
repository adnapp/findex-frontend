import React from 'react'


function TransactionCard({transaction, handleRemoveTransaction}){ //passing handleRemoveTransaction too far

    const {id, name, amount, category} = transaction 



    return( 
        <div className="transaction-card-div">
            <p>{name}, ${amount.toFixed(2)} - {category.name}</p>
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