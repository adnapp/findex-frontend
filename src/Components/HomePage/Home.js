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

            <h1> At findex, we believe that taking control of your finances is an important part of budgeting
                <br/> Waht does financial freedom mean to you?
            </h1>
        </HomeDiv>


        </div>
    )
}

const HomeDiv = styled.div`
text-align: center;
`


export default Home;