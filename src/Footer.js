import React from 'react'
import styled from "styled-components"


function Footer(){


    return( 
        <FooterDiv>
            <h1>Findex</h1>
            <p>®</p>
            <p><i class="fab fa-instagram"></i></p>
            <p><i class="fab fa-twitter"></i></p>
            <p><i class="fab fa-youtube"></i></p>
        </FooterDiv>
    
    )
}


const FooterDiv = styled.div`
    background-color: #060b26;
    justify-content: left;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    padding: 0 50px;
    height: 100px;
    width: 100vw;
    position:absolute;
    left:0;
    bottom:0;
    right:0;
    color:white;
`
export default Footer