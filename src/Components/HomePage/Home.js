import React from "react"
import ReactDOM from 'react-dom'
import Logo from '../images/findexTopLogo.png';
import './Home.css'
import styled from 'styled-components'

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
                <br/> Waht does financial freedom mean to you?
            </HomeTextObjects>
            <HomeTextObjects>Input data point here</HomeTextObjects>
            <HomeTextObjects>Input Image</HomeTextObjects>
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
`


export default Home;