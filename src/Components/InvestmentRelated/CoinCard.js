import React from 'react'
import styled from "styled-components";




function CoinCard({coin, order}){





    return(
        <CoinCardDiv>
            <h2>#{order}, {coin.name}</h2>
            <h3>{coin.symbol}</h3>
            <p>${coin.current_price}</p>
        </CoinCardDiv>
    )
}


export default CoinCard


const CoinCardDiv = styled.div`
border:1px #ccc solid;
width: 50%;
margin: 0 auto;

`
