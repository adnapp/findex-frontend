import React, {useEffect, useState} from "react"
import MonthComparisonChart from "./MonthComparisonChart"
import styled from "styled-components";


function Profile(){
    const [allMonths, setAllMonths]= useState({})
    const [isLoaded, setIsLoaded] = useState(false)
    const [userData, setUserData] = useState()

    useEffect(()=> {
        fetch(`${process.env.REACT_APP_API_BASE_URL}/users/11`)
        .then(resp => resp.json())
        .then(data => {
            setUserData(data)
            setAllMonths(data.MonthlyBudgets)
            setIsLoaded(true)
        })
    }, [])

    if (!isLoaded) return <h2>Loading...</h2>;

    console.log(allMonths)

    const monthsSimplified = allMonths.map(month=> {
        let totalSpent
        {month.transactions[0] ?
             totalSpent = month.transactions.map(transaction => transaction.amount)
             .reduce(( accumulator, currentValue ) => accumulator + currentValue,0).toFixed(2)
        : totalSpent=0}
        
        return {
            name: month.name,
            budget: month.budget,
            spent: totalSpent
        }
    }).filter(month => month.spent != 0 )

    console.log(monthsSimplified)

    
    // let's make it so only mapping average/percent from months with transactions



    let average =  monthsSimplified.map(month=>month.spent).reduce((a, b) => parseInt(a) + parseInt(b))/monthsSimplified.length;

    let percentInBudget = monthsSimplified.map(month=> {
        return (month.budget > month.spent ?  1 :  0)

    }).reduce((a, b) => parseInt(a) + parseInt(b))/(monthsSimplified.length)*100

    return( 
        <ProfilePageDiv>
        <h2>{userData.name}'s Profile</h2>
        <TextBoxDivs>Your average spend per month was ${average}</TextBoxDivs>
        <TextBoxDivs>Your spending was within your income {percentInBudget.toFixed(1)}% of the time</TextBoxDivs>
        {/* <p>additional info/ another chart</p> */}
        <br/><br/>
        <MonthComparisonChart allMonths={allMonths}/>
        </ProfilePageDiv>
    )
}

const ProfilePageDiv = styled.div`
    height: 90vh;
    text-align:center;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

const TextBoxDivs = styled.div`
margin: 7px;
padding: 7px;
border: 1px;
`


export default Profile;