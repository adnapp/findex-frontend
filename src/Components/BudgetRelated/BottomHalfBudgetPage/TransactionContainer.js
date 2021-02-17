import React, {useState} from 'react'
import TransactionList from './TransactionList'
import "./Transactions.css"



function TransactionContainer({selectedMonthData, submitTransaction, handleRemoveTransaction}){
    const [clicked, setClicked] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        amount: "",
        type: null,
        category_id: ""
    })

    function handleChange(event){
        const name = event.target.name; 
        let value = event.target.value;

        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const transactions = selectedMonthData.transactions
    
    const categoriesList = selectedMonthData.categories.map(category => {
        return <option key={category.id}  value={category.id}> {category.name }</option>
    })


    function handleSubmit(e) {
        e.preventDefault()

        submitTransaction(formData)
        setClicked(false)

        setFormData({
            name: "",
            amount: "",
            type: null,
            category_id: ""
        })
    }


    const formObj = (
        <>
         <form className="new-transaction-form" onSubmit={handleSubmit}>
            <input 
                placeholder="Transaction Name"
                name="name"
                value={formData.name}
                onChange={handleChange} />
             <input 
                type="number"
                placeholder="Transaction Amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}/>
            <select onChange={handleChange} name="category_id">
                <option selected value="null">Select a Category</option>
                {categoriesList}
            </select>
            <button type="submit">Add Transaction</button>
         </form>
         <button onClick={() => setClicked(false)}>cancel</button>
         </>
    )

    return( 
        <> <br/><br/>
        <h1>Transactions</h1>
        <div className="transaction-container">
             <TransactionList transactions={transactions} handleRemoveTransaction={handleRemoveTransaction} categoriesList={categoriesList} />
        </div>
        <br/>
        {!clicked ? <button className="add-transaction-button" onClick={(e) => setClicked(true)}>Add a New Transaction</button> : formObj}

        </>
    )
}


export default TransactionContainer