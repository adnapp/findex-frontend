import React, {useEffect, useState} from 'react'
// import {useHistory} from 'react-router-dom'
import TransactionContainer from './BottomHalfBudgetPage/TransactionContainer'
import Modal from './Modal/MonthlyIncomeModal'
import CategoryContainer from './TopHalfBudgetPage/CategoryContainer'
import MonthGraph from './TopHalfBudgetPage/MonthGraph'


function BudgetPage(){
    const [showMIModal, setShowMIModal] = useState(false)

    const [allMonths, setAllMonths]= useState({})
    const [selectedMonthNumber, setSelectedMonthNumber] = useState(40)
    const [isLoaded, setIsLoaded] = useState(false)
    const [transactions, setTransactions] = useState([]) //used to refresh page
    
    //month will be selected here, this is where fetch will happen. 
    //Then values will go down to Graph/Containers
    
    //look @ time.now to set initial date on page load
    
    //initial load
    useEffect(()=> {
        fetch(`${process.env.REACT_APP_API_BASE_URL}/monthly_budgets`)
        .then(resp => resp.json())
        .then(data => {
            setAllMonths(data)
            setIsLoaded(true)
        })
    }, [transactions])
    
    if (!isLoaded) return <h2>Loading...</h2>;
    
    const existingMonthNums = allMonths.map(month => {
        return month.id
    })

    console.log(existingMonthNums)
    
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
    const selectedMonthData = allMonths.find(month=>(month.id == selectedMonthNumber))
    
    function handleRemoveCategory(id){
        
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
        fetch(`${process.env.REACT_APP_API_BASE_URL}/categories/${data.id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
          .then(response => response.json())
          .then(data => setTransactions(data))
    }

    function updateMonthBudget(data){
        console.log(data)
        fetch(`${process.env.REACT_APP_API_BASE_URL}/monthly_budgets/${selectedMonthNumber}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
          .then(response => response.json())
          .then(data=> setTransactions(data))
    }

    // let monthForwardBoolean
    function monthForward(){
        // monthForwardBoolean = existingMonthNums.indexOf(selectedMonthNumber+1)

        if( existingMonthNums.indexOf(selectedMonthNumber+1)>-1 ){

            setSelectedMonthNumber((selectedMonthNumber+1))
        }
    }

    function monthBack(){
        // (e) => setSelectedMonthNumber((selectedMonthNumber-1))
        if(existingMonthNums.indexOf(selectedMonthNumber)){
            setSelectedMonthNumber((selectedMonthNumber-1))
        }

    }
    
    //sum up total budget
    const totalBudget = selectedMonthData.categories.map(category => (category.budget))
    .reduce(( accumulator, currentValue ) => accumulator + currentValue,0).toFixed(2)

    //sums up total spent
    const totalSpent = selectedMonthData.transactions.map(transaction => transaction.amount)
    .reduce(( accumulator, currentValue ) => accumulator + currentValue,0).toFixed(2)

    return( 
        <>
        <h4>{selectedMonthData.name}</h4>
        <div className="month-change-buttons">
            
            {(existingMonthNums.indexOf(selectedMonthNumber-1) > -1)? <button onClick={monthBack} className="month-back">  ◀️</button>: null}
            {(existingMonthNums.indexOf(selectedMonthNumber+1) > -1)? <button onClick={monthForward} className="month-forward"> ▶️</button>: null}
        </div>
        {/* <select onChange={(e) => setSelectedMonthNumber((e.target.value))}>
            {existingMonthNums}
        </select> */}
        <button onClick={() => setShowMIModal(true)}>Adjust Monthly Income</button>
        <Modal 
            show={showMIModal} 
            onClose={() => setShowMIModal(false)}
            currentIncome = {selectedMonthData.budget}
            updateMonthBudget={updateMonthBudget}/>

        <div className="top-half-budget-page">
            <p>Total Spent {totalSpent}</p>
            {totalBudget > selectedMonthData.budget ? <p> Total budget: ${totalBudget}. Your budget is higher than your income this month</p> : <p>Total budget: {totalBudget}</p>}
            <p>Monthly Income: {selectedMonthData.budget}</p>
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