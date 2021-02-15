import React, {useState} from 'react'
import TransactionList from './TransactionList'


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

    // console.log(categoriesList)

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
    )

// console.log(categoriesList)

    return( 
        <>
        <div className="transaction-container">
            
             <TransactionList transactions={transactions} handleRemoveTransaction={handleRemoveTransaction} categoriesList={categoriesList} />

        </div>
        {!clicked ? <button onClick={(e) => setClicked(true)}>Add Transaction</button> : formObj}

        </>
    )
}


export default TransactionContainer