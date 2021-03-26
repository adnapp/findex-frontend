import React, { useEffect, useState} from 'react'
import {useParams} from "react-router-dom"

function InvestmentDetail(){
    
    const params = useParams();
    const [coinData, setCoinData] = useState()
    const [isLoaded, setIsLoaded] = useState(false)

    const coinName = params.id.toLowerCase()
    
  

    useEffect(() => {
        const apiCall = () => {
            fetch(`https://api.coingecko.com/api/v3/coins/${coinName}`)
            .then(response => response.json())
            .then(data => {
                setCoinData(data)
                setIsLoaded(true)})
        }
        apiCall()
        const id = setInterval(apiCall, 100000);
        return () => clearInterval(id);
    }, [coinName])

   
    
    if (!isLoaded) return <h2>Loading...</h2>;

    console.log(coinData)

    return(
        <h1>Test {params.id}</h1>
    )
}


export default InvestmentDetail


