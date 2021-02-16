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

    return( 
        <ProfilePageDiv>
        <h2>{userData.name}'s Profile</h2>
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


export default Profile;