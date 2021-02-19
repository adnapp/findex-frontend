import React, {useEffect, useState, useMemo} from "react"
import ReactDOM from 'react-dom'
import CoinCard from "./CoinCard"
import styled from "styled-components";
import useColumns from "./Columns";
import CryptoTable from "./CryptoTable";


function InvestmentMain(){

    const [allCoins, setAllCoins] = useState({})
    const [coinIndex, setCoinIndex] = useState(0)
    const [isLoaded, setIsLoaded] = useState(false)
    const [pageIndex, setPageIndex] = useState(0)
    const columns = useColumns();

    // console.log(columns)

    //pull api data every xx amt of time
    useEffect(() => {
        apiCall()
        const id = setInterval(apiCall, 100000);
        return () => clearInterval(id);
        }, [])

    const apiCall = () => {
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`)
        .then(response => response.json())
        .then(data => {
            setAllCoins(data)
            setIsLoaded(true)})
    }
    
    if (!isLoaded) return <h2>Loading...</h2>;

    
    const selectedCoins = allCoins.slice(coinIndex, coinIndex+10)
    
    console.log(selectedCoins)


    // const coinCardObj = selectedCoins.map((coin, index)=>{
    //     return <CoinCard key={coin.current_price} coin={coin} order={pageIndex*10+index+1}/>
    // })

    function pageForward(){
        setCoinIndex(coinIndex+10);
         setPageIndex(pageIndex+1)
    }

    function pageBackward(){
        setCoinIndex(coinIndex-10);
         setPageIndex(pageIndex-1)
    }


    return(
        <>
        <InvestmentMainPageDiv>
            <h1>Market Prices for Investments</h1>
            <p>You may be thinking... now that you are spending more time at home, what additional investments could you put your money towards?</p>
            <br/><br/>
            {/* {coinCardObj} */}
            <CryptoTable selectedCoins={selectedCoins} pageIndex={pageIndex} pageBackward={pageBackward} pageForward={pageForward}/>
        </InvestmentMainPageDiv>
        
        
       
        <BottomDiv>**Data updated every 5 minutes <br/>
            **All Data from CoinGecko</BottomDiv>
        </>
    )
}

export default InvestmentMain;

const BottomDiv = styled.div`
height:25px;
padding: 20px 0;
text-align:center;
`


const InvestmentMainPageDiv = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
padding: 10px;
margin:20px;
`

