import React, {useEffect, useState} from "react"
// import ReactDOM from 'react-dom'
// import CoinCard from "./CoinCard"
import styled from "styled-components";
// import useColumns from "./Columns";
import CryptoTable from "./CryptoTable";


function InvestmentMain(){

    const [allCoins, setAllCoins] = useState({})
    const [coinIndex, setCoinIndex] = useState(0)
    const [isLoaded, setIsLoaded] = useState(false)
    const [pageIndex, setPageIndex] = useState(0)
    // const columns = useColumns();

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
            <InvestButton>Invest in Crypto! (coming soon) </InvestButton>
            <a href="https://www.coinbase.com/oauth/authorize/oauth_signin?client_id=0f2a8cd78a151b126a7be948bf82e47a1e81bfcd8a83e757d4258b31bc90c45c&redirect_uri=https%3A%2F%2Fdev-up463193.us.auth0.com%2Flogin%2Fcallback&response_type=code&scope=wallet%3Aaccounts%3Aread+wallet%3Aaddresses%3Aread+wallet%3Abuys%3Aread+wallet%3Acheckouts%3Aread+wallet%3Adeposits%3Aread+wallet%3Aorders%3Aread+wallet%3Asells%3Aread+wallet%3Atransactions%3Aread+wallet%3Auser%3Aread+wallet%3Awithdrawals%3Aread&state=TgPxN_Y7DmjD74YSJnYAotEKgpdINHNs">Login to Coinbase</a>
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
const InvestButton = styled.button`
width: 30vw;
`
