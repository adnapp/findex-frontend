import React, {useEffect, useState} from "react"
import MonthComparisonChart from "./MonthComparisonChart"

function Profile(){
    const [allMonths, setAllMonths]= useState({})
    const [isLoaded, setIsLoaded] = useState(false)


    useEffect(()=> {
        fetch(`${process.env.REACT_APP_API_BASE_URL}/monthly_budgets`)
        .then(resp => resp.json())
        .then(data => {
            setAllMonths(data)
            setIsLoaded(true)
        })
    }, [])

    if (!isLoaded) return <h2>Loading...</h2>;

console.log(allMonths)
    return( 
        <>
        <h3>ProfileRelated</h3>
        <MonthComparisonChart/>
        </>
    )
}


export default Profile;