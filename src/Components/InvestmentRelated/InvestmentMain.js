import React, {useEffect, useState} from "react"
import ReactDOM from 'react-dom'
import CoinCard from "./CoinCard"


function InvestmentMain(){

    const [allCoins, setAllCoins] = useState({})
    const [coinIndex, setCoinIndex] = useState(0)
    const [isLoaded, setIsLoaded] = useState(false)
    const [pageIndex, setPageIndex] = useState(0)


    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`)
        .then(response => response.json())
        .then(data => {
            setAllCoins(data)
            setIsLoaded(true)})
    }, [])
    
    if (!isLoaded) return <h2>Loading...</h2>;

    
    const selectedCoins = allCoins.slice(coinIndex, coinIndex+10)
    
    console.log(selectedCoins)


    const coinCardObj = selectedCoins.map((coin, index)=>{
        return <CoinCard key={coin.current_price} coin={coin} order={pageIndex*10+index+1}/>
    })

    function pageForward(){
        setCoinIndex(coinIndex+10);
         setPageIndex(pageIndex+1)
    }

    function pageBackward(){
        setCoinIndex(coinIndex-10);
         setPageIndex(pageIndex-1)
    }

    console.log(pageIndex)

    return(
        <>
        <div className="crypto-cards-div">
            <h1>investment page</h1>
            {coinCardObj}
        </div>
        {pageIndex==0 ? null : <button onClick={() => pageBackward()}>Previous Page</button>}
        {pageIndex==9? null : <button onClick={() => pageForward()}>Next Page</button>}
        </>
    )
}

export default InvestmentMain;