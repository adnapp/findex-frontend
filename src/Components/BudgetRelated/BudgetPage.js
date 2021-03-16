import React, {useEffect, useState} from 'react'
// import {useHistory} from 'react-router-dom'
import TransactionContainer from './BottomHalfBudgetPage/TransactionContainer'
import CreateNewMonthModal from './Modal/CreateNewMonthModal'
import Modal from './Modal/MonthlyIncomeModal'
import CategoryContainer from './TopHalfBudgetPage/CategoryContainer'
import MonthGraph from './TopHalfBudgetPage/MonthGraph'
import styled from "styled-components";
import './BudgetPage.css'
import * as BiIcons from "react-icons/bi";


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
    }, [transactions, selectedMonthNumber, selectedMonthNumber])
    
    if (!isLoaded) return <h2>Loading...</h2>;
    
    const existingMonthNums = allMonths.map(month => month.id ).sort()
//    console.log(existingMonthNums.sort())

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
        console.log(id)
        fetch(`${process.env.REACT_APP_API_BASE_URL}/transactions/${id}`, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then(data => setTransactions(data))
    }
    
    const selectedMonthData = allMonths.find(month=>(month.id === parseInt(selectedMonthNumber)))
    
    function handleRemoveCategory(id){
        fetch(`${process.env.REACT_APP_API_BASE_URL}/categories/${id}`, {
            method: "DELETE"
            })
            .then(response => response.json())
            .then(data => setTransactions(data))
    }

    function handleRemoveMonth(){
        console.log(selectedMonthNumber)
        fetch(`${process.env.REACT_APP_API_BASE_URL}/monthly_budgets/${selectedMonthNumber}`, {
            method: "DELETE"
            })
            .then(response => response.json())
            .then(setSelectedMonthNumber(44))
    }
console.log(selectedMonthNumber)

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
        //    if( existingMonthNums.indexOf(selectedMonthNumber+1)>-1 ){
        //     setSelectedMonthNumber((selectedMonthNumber+1))
        // }
        setSelectedMonthNumber(existingMonthNums[indexOfSelectedMonth+1])
    }

    function monthBack(){
        // if(existingMonthNums.indexOf(selectedMonthNumber)){
        //     setSelectedMonthNumber((selectedMonthNumber-1))
        // }
        setSelectedMonthNumber(existingMonthNums[indexOfSelectedMonth-1])

    }
    
    let totalBudget=0
    let totalSpent=0
    //sum up total budget
    // if (selectedMonthData){
     totalBudget = selectedMonthData.categories.map(category => (category.budget))
    .reduce(( accumulator, currentValue ) => accumulator + currentValue,0).toFixed(2)

    //sums up total spent
     totalSpent = selectedMonthData.transactions.map(transaction => transaction.amount)
    .reduce(( accumulator, currentValue ) => accumulator + currentValue,0).toFixed(2)
// }

    //maybe utilize other Progress Bar
    let percentageSpent = (totalSpent / selectedMonthData.budget)*100
    const mainProgressBarStyle ={
       
        width: `${percentageSpent}%`,
        background: "#00468c",
    }

    //used to not enable this variable unless there is data-- refactor?
    let biggestTransaction = 0
    {selectedMonthData.transactions[0] ?
         biggestTransaction = selectedMonthData.transactions.reduce(
        (accumulator,obj) => (obj.amount > accumulator.amount ? obj : accumulator))
    :  biggestTransaction=0}

    let indexOfSelectedMonth = (existingMonthNums.indexOf(selectedMonthNumber))
    console.log(selectedMonthData)
    return( 
        <div className="budget-page-div">
            <div className="month-change-buttons-div">
                {existingMonthNums[indexOfSelectedMonth-1] ? <h1 onClick={monthBack} className="month-back">  <BiIcons.BiLeftArrow/>  </h1>: null}
                <h2>{selectedMonthData.name}</h2>
                {existingMonthNums[indexOfSelectedMonth+1] ? <h1 onClick={monthForward} className="month-forward"> <BiIcons.BiRightArrow/> </h1>: null}
            </div>
            
            <ProgressBarDiv>
                    <ProgressBarFillerDiv style={mainProgressBarStyle} ></ProgressBarFillerDiv>
                    <br></br>
                    <ProgressBarLabels>
                        <div>Spent: ${totalSpent}</div>
                        <div>Income ${selectedMonthData.budget}</div>
                        <button className="edit-monthly-income-button" onClick={() => setShowMIModal(true)}>Adjust</button>
                    </ProgressBarLabels>
            </ProgressBarDiv>
           <div style={{height: "40px"}}></div> {/* used to move chart lower  */}
            <br></br>

            <Modal 
                show={showMIModal} 
                onClose={() => setShowMIModal(false)}
                updateMonthBudget={updateMonthBudget}
            />
            <CreateNewMonthModal 
                show={createMonthModal}
                onClose={() => setCreateMonthModal(false)}
                setSelectedMonthNumber = {setSelectedMonthNumber}
                setIsLoaded = {setIsLoaded}
            
            />

            <div className="top-half-budget-page">
            
                <div className="text-and-chart-budget-page">
                    {selectedMonthData.categories[0] ? //only display text if transacitons exist
                        <div className="top-half-budget-page-text">
                                {totalBudget > selectedMonthData.budget ? 
                                    <p> You have budgeted ${totalBudget}. Your budget is higher than your income this month</p> 
                                    : <p>You have budgeted ${totalBudget} for this month.</p>
                                }
                                {selectedMonthData.transactions[0] ?
                                    <p>Your highest spend item this month was <strong>{biggestTransaction.name}</strong> where you spent <strong>${biggestTransaction.amount.toFixed(2)}</strong>.</p>
                            : null }
                                    {/* <p> and your highest spend category was :</p> */}
                        </div>
                    : <div className="top-half-budget-page-text">
                        <p>You have not imported any transactions for this month yet</p>
                    </div>
                }
                    <div className='bar-chart-div'>
                        {selectedMonthData.categories[0]? (
                        <MonthGraph selectedMonthData={selectedMonthData}/> 
                        ) : (
                        <div className="no-categories-div">
                            <h3>You don't have a budget for this month!</h3>
                            <h3>Create some categories below to begin building a budget</h3></div>)}
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
            <button onClick={handleRemoveMonth}>Delete Month</button>

            <AddNewMonthDiv>
                {!existingMonthNums[indexOfSelectedMonth+1] ? <button onClick={() => setCreateMonthModal(true)}>Create New Month</button> : null}
            </AddNewMonthDiv>   
        </div>
    )
}

const ProgressBarDiv = styled.div`
    height: 8px;
    border-radius: 5px;
    width: 88%;
    margin: 0 auto;
    background: rgb(165, 164, 187);
    border:1px #ccc solid;
    z-index: 0;
`

const ProgressBarFillerDiv = styled.div`
    height: 100%;
    border-radius: 5px;
    transition: width .2s ease-in;
`


const ProgressBarLabels = styled.div`
    //  width: 88%;
    display: flex;
    justify-content: space-between;
`
const AddNewMonthDiv = styled.div`
    position: absolute;
    top: 100px;
    right: 120px;
`





export default BudgetPage