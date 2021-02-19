import React from "react"
import ReactDOM from 'react-dom'
import Logo from '../images/findexTopLogo.png';
import './Home.css'
import styled from 'styled-components'
import tulumImage from '../images/Tulum.jpg'

// import { 
//     VictoryBar, 
//     VictoryChart, 
//     VictoryGroup, 
//     VictoryLegend } from 'victory';

function Home(){





    return(
        <div>

        <div className="home-page-logo-wrapper" style={{background: '#060b26'}}>
            <img src={Logo} alt="findex logo" className="home-page-logo"/>
        </div>

        <HomeDiv>

            <HomeTextObjects> At findex, we believe that taking control of your finances is an important part of budgeting
                <br/><br/> What does financial freedom mean to you?
            </HomeTextObjects>
            <TulumImage src={tulumImage}></TulumImage>
            <HomeTextObjects>Input data point here</HomeTextObjects>
            <HomeTextObjects>Input data point here</HomeTextObjects>

        </HomeDiv>


        </div>
    )
}

const HomeDiv = styled.div`
text-align: center;
`

const HomeTextObjects = styled.div`
font-size: 34px;
margin: 20px;
padding:20px;
width: 100vw;
`

const TulumImage = styled.img`
width: 100vw;
height: 100vh;
`


export default Home;