import React, {useEffect, useState} from 'react'
// import {useHistory} from 'react-router-dom'
import TransactionContainer from './BottomHalfBudgetPage/TransactionContainer'
import CreateNewMonthModal from './Modal/CreateNewMonthModal'
import Modal from './Modal/MonthlyIncomeModal'
import CategoryContainer from './TopHalfBudgetPage/CategoryContainer'
import MonthGraph from './TopHalfBudgetPage/MonthGraph'
import styled from "styled-components";
import './BudgetPage.css'


function BudgetPage(){
    const [showMIModal, setShowMIModal] = useState(false)
    const [createMonthModal, setCreateMonthModal] = useState(false)
    const [allMonths, setAllMonths]= useState({})
    const [selectedMonthNumber, setSelectedMonthNumber] = useState(44) /// let's auto select this
    const [isLoaded, setIsLoaded] = useState(false)
    const [transactions, setTransactions] = useState([]) //used to refresh page
    
    //look @ time.now to set initial date on page load
    
    //initial load
    useEffect(()=> {
        fetch(`${process.env.REACT_APP_API_BASE_URL}/monthly_budgets`)
        .then(resp => resp.json())
        .then(data => {
            setAllMonths(data)
            setIsLoaded(true)
        })
    }, [transactions, selectedMonthNumber])
    
    if (!isLoaded) return <h2>Loading...</h2>;
    
    const existingMonthNums = allMonths.map(month => month.id )
   
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

    function monthForward(){
           if( existingMonthNums.indexOf(selectedMonthNumber+1)>-1 ){
            setSelectedMonthNumber((selectedMonthNumber+1))
        }
    }

    function monthBack(){
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

    const percentageSpent = (totalSpent / selectedMonthData.budget)*100
    const mainProgressBarStyle ={
        width: `${percentageSpent}%`,
        background: "#00468c",
        // zIndex: 3,
    }


    console.log(selectedMonthData)
    //used to not enable this variable unless there is data-- refactor?
    let biggestTransaction = 0
    {selectedMonthData.transactions[0] ?
         biggestTransaction = selectedMonthData.transactions.reduce(
        (accumulator,obj) => (obj.amount > accumulator.amount ? obj : accumulator))
    :  biggestTransaction=0}

    return( 
        <div className="budget-page-div">
            <div className="month-change-buttons-div">
                {(existingMonthNums.indexOf(selectedMonthNumber-1) > -1)? <h1 onClick={monthBack} className="month-back">  ◀️  </h1>: null}
                <h3>{selectedMonthData.name}</h3>
                {(existingMonthNums.indexOf(selectedMonthNumber+1) > -1)? <h1 onClick={monthForward} className="month-forward"> ▶️ </h1>: null}
            </div>
            {(existingMonthNums.indexOf(selectedMonthNumber+1) > -1)? null : <button onClick={() => setCreateMonthModal(true)}>Create New Month</button>}

            
            <div className="progress-bar">
                    <div className="progress-filler" style={mainProgressBarStyle} ></div>
                    <br></br>
                    <PercentageSpentLabel>Spent: ${totalSpent}</PercentageSpentLabel>
                    <TotalIncomeLabel>Income ${selectedMonthData.budget}</TotalIncomeLabel>
                    <EditMonthlyIncome onClick={() => setShowMIModal(true)}>Adjust</EditMonthlyIncome>
                    
            </div>
           <div style={{height: "40px"}}></div> {/* used to move chart lower  */}
            <br></br>

            <Modal 
                show={showMIModal} 
                onClose={() => setShowMIModal(false)}
                currentIncome = {selectedMonthData.budget}
                updateMonthBudget={updateMonthBudget}
            />
            <CreateNewMonthModal 
                show={createMonthModal}
                onClose={() => setCreateMonthModal(false)}
                setSelectedMonthNumber = {setSelectedMonthNumber}
            
            />

            <div className="top-half-budget-page">
                
                <div className="text-and-chart-budget-page">

                    {selectedMonthData.transactions[0] ? //only display text if transacitons exist
                        <div className="top-half-budget-page-text">
                            <div className="adjust-add-budget-buttons-div">
                                {existingMonthNums.indexOf(selectedMonthNumber+1) == -1 ? <button onClick={() => setCreateMonthModal(true)}>Create New Month</button> : null}
                            </div>  
                                {totalBudget > selectedMonthData.budget ? 
                                    <p> Total budget ${totalBudget}. Your budget is higher than your income this month</p> 
                                    : <p>Total budget: {totalBudget}</p>
                                }
                            <p>Your highest spend item this month was {biggestTransaction.name} where you spent ${biggestTransaction.amount.toFixed(2)}.</p>
                            <p> and your highest spend category was :</p>
                        </div>
                    : null }
                    <div className="budget-page-chart-div">
                        {selectedMonthData.categories[0]? (
                        <MonthGraph selectedMonthData={selectedMonthData}/> 
                        ) : (
                        <div className="no-categories-div">
                            <h3>You should create some categories for this month</h3>
                            <h3>Use the button below</h3></div>)}
                        </div>
                </div>
                <CategoryContainer 
                    selectedMonthData={selectedMonthData} 
                    createCategory={createCategory} 
                    handleRemoveCategory={handleRemoveCategory}
                    submitCategoryEdit={submitCategoryEdit}
                />
            </div>

            {selectedMonthData.categories[0] ? 
                <div className="bottom-half-budget-page">
                    <TransactionContainer selectedMonthData={selectedMonthData} submitTransaction={submitTransaction} handleRemoveTransaction={handleRemoveTransaction}/>
                </div>
            : null}
        </div>
    )
}


const TotalIncomeLabel = styled.div`
position:absolute;
right: 40px;
`;

const PercentageSpentLabel = styled.div`
  position:absolute;
    left: 40px;

`

const EditMonthlyIncome = styled.button`
    position:absolute;
    right: -25px;
    border-radius: 7px;
    padding: 4px 8px;
    border: none;
    color: #fff;
    background: #141414;
    cursor: pointer;
`;



export default BudgetPage