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
            <div className="below-image-text">
                <HomeTextObjects>
                    <div className='bulleted-list-div'>
                        <strong>How do you define financial stability?</strong>
                        <ul>
                            <li>Purchasing a beach front home?</li>
                            <li>Buying your first home?</li>
                            <li>Having enough money to comfortably retire at 50?</li>
                            <li>Buying a lambo?</li>
                        
                        </ul>
                    </div>
                    <div className="right-bulleted-list-div">
                        Do you know how you're going reach these goals? 
                    </div>

                </HomeTextObjects>
            </div>
                <HomeTextObjects><strong><u>According to US Bank, only 41% of Americans have a budget</u></strong></HomeTextObjects>
                <HomeTextObjects>
                    <BottomPageDiv>
                        Once you become aware of your spending habits, it becomes much easier to budget
                        <br/><br/>
                        At <strong>Findex</strong>, it is our mission to help visualize your spending habits, and simplify budget creation
                    </BottomPageDiv>
                </HomeTextObjects>
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
padding:40px;
width: 100vw;
display: flex;
justify-content: center;
`

const TulumImage = styled.img`
width: 100vw;
height: 100vh;
`

const BottomPageDiv = styled.div`
height: 25vh;
text-size: medium;
`


export default Home;