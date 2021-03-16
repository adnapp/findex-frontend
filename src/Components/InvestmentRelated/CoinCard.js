import React, {useRef, useEffect, useState} from 'react'
import styled from "styled-components";




function CoinCard({coin, order}){
    // const [color, setColor] = useState("black")
    // const prevPriceRef = useRef(coin.current_price)

    // //to change the price of the text upon price change-- current api pulls every 5 min
    // useEffect(() => {
    //     // use the current value of the ref
    //     const prevPrice = prevPriceRef.current;
    
    //     if (coin.current_price > prevPrice) {
    //       setColor("green");
    //     } else if (coin.current_price < prevPrice) {
    //       setColor("red");
    //     } else {
    //       setColor("black");
    //     }
    //     // set the new value of the ref (note: this doesn't trigger a re-render)
    //     prevPriceRef.current = coin.current_price;
    //   }, [coin.current_price]);

    // return(
    //     <CoinCardDiv>
    //         <h2>#{order}. {coin.name}</h2>
    //         <img 
    //           src={coin.image} 
    //           alt="coin-here"
    //           width="50"
    //           height="50"></img>
    //         <h3>{coin.symbol}</h3>
    //         <p style={{color: color}}>${coin.current_price}</p>
    //     </CoinCardDiv>
    // )
}


export default CoinCard


const CoinCardDiv = styled.div`
border:1px #ccc solid;
width: 50%;
margin: 0 auto;


`
