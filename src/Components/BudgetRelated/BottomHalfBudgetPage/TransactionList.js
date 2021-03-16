import React, {useState} from 'react'
import Search from './Search'
import TransactionCard from './TransactionCard'
import "./Transactions.css"


function TransactionList({transactions, handleRemoveTransaction, categoriesList}){

    const [selectedCategory, setSelectedCategory] = useState("all")


    // console.log(selectedCategory)

    function handleChange(value){
        setSelectedCategory(value)
    }

    const filteredTransactions = transactions.filter(transaction =>{
        if (selectedCategory === "all"){
            return transaction 
        }
        return transaction.category_id === parseInt(selectedCategory)
    })

    const transactionsObj = filteredTransactions.map((transaction=> {
        return <TransactionCard key={transaction.id} transaction={transaction} handleRemoveTransaction={handleRemoveTransaction}/>
    }))

    console.log(transactions)

    return( 
        <>
        <div className="transaction-list-div">
            {transactions[0] ? <Search categoriesList={categoriesList} handleChange={handleChange}/>: null}
            {transactionsObj}
        </div>
        </>
    )
}


export default TransactionList