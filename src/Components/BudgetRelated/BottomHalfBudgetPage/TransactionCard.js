import React from 'react'
import "./Transactions.css"
import styled from "styled-components";
import {AiFillDelete } from "react-icons/ai";



function TransactionCard({transaction, handleRemoveTransaction}){ //passing handleRemoveTransaction too far

    const {id, name, amount, category} = transaction 



    return( 
        <div className="transaction-card-div">
            <p>{name}, ${amount.toFixed(2)} - {category.name}</p>
            <DeleteTransactionButton 
                data-id={id}
                onClick={() => handleRemoveTransaction(id)}
                />
        </div>
    )
}



const DeleteTransactionButton = styled(AiFillDelete)`
    cursor: pointer;
    // width: 16px;
    // height: 16px;
    padding: 0;
    z-index: 10;
    float: right;

`

export default TransactionCard