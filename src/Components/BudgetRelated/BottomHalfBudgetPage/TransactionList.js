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
        return transaction.category_id == selectedCategory
    })

    const transactionsObj = filteredTransactions.map((transaction=> {
        return <TransactionCard key={transaction.id} transaction={transaction} handleRemoveTransaction={handleRemoveTransaction}/>
    }))

    return( 
        <>
        <div className="transaction-list-div">
            <h3>Transactions:</h3>
            <Search categoriesList={categoriesList} handleChange={handleChange}/>
            {transactionsObj}
            

        </div>
        </>
    )
}


export default TransactionList