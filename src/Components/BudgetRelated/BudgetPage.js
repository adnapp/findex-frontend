import React, {useEffect, useState} from 'react'
// import {useHistory} from 'react-router-dom'
import TransactionContainer from './BottomHalfBudgetPage/TransactionContainer'
import CategoryContainer from './TopHalfBudgetPage/CategoryContainer'
import MonthGraph from './TopHalfBudgetPage/MonthGraph'


function BudgetPage(){

    const [allMonths, setAllMonths]= useState({})
    const [selectedMonthNumber, setSelectedMonthNumber] = useState(33)
    const [isLoaded, setIsLoaded] = useState(false)
    const [transactions, setTransactions] = useState([]) //used to refresh page

    //month will be selected here, this is where fetch will happen. 
    //Then values will go down to Graph/Containers

    //look @ time.now to set initial date on page load

    useEffect(()=> {
        fetch(`${process.env.REACT_APP_API_BASE_URL}/monthly_budgets`)
        .then(resp => resp.json())
        .then(data => {
            setAllMonths(data)
            setIsLoaded(true)
        })
    }, [transactions])

    if (!isLoaded) return <h2>Loading...</h2>;


    // console.log(allMonths)
    // console.log(selectionValues)


    const selectionValues = allMonths.map(month => {
        return <option key={month.id} value={month.id}>{month.name}</option>
    })

    const selectedMonthData = allMonths.find(month=>(month.id == selectedMonthNumber))
 
    function submitTransaction(formData){
        fetch(`${process.env.REACT_APP_API_BASE_URL}/transactions`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          })
          .then(response => response.json())
          .then(data => {
            setTransactions(data);
          })
    }

    function handleRemoveTransaction(id){
        fetch(`${process.env.REACT_APP_API_BASE_URL}/transactions/${id}`, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then(data => setTransactions(data))
    }

    function handleRemoveCategory(id){
        console.log(id)

        
            fetch(`${process.env.REACT_APP_API_BASE_URL}/categories/${id}`, {
                method: "DELETE"
            })
            .then(response => response.json())
            .then(data => setTransactions(data))
        
    }

    function createCategory(formData){
        fetch(`${process.env.REACT_APP_API_BASE_URL}/categories`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          })
          .then(response => response.json())
          .then(data => {
            setTransactions(data);
          })
    }

    function submitCategoryEdit(data){
        console.log(data)
        fetch(`${process.env.REACT_APP_API_BASE_URL}/categories/${data.id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
          .then(response => response.json())
          .then(data => {
            setTransactions(data);
          })

    }



    return( 
        <>
        <h4>budgeting page, month selection here</h4>
        <select onChange={(e) => setSelectedMonthNumber((e.target.value))}>
            {selectionValues}
        </select>

        <div className="top-half-budget-page">
            <MonthGraph selectedMonthData={selectedMonthData}/>
            <CategoryContainer 
                selectedMonthData={selectedMonthData} 
                createCategory={createCategory} 
                handleRemoveCategory={handleRemoveCategory}
                submitCategoryEdit={submitCategoryEdit}
            />
        </div>
        <div className="bottom-half-budget-page">
            <TransactionContainer selectedMonthData={selectedMonthData} submitTransaction={submitTransaction} handleRemoveTransaction={handleRemoveTransaction}/>
        </div>
        </>
    )
}


export default BudgetPage