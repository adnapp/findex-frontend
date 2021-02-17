import React from "react"
import ReactDOM from 'react-dom'
import Logo from '../images/findexTopLogo.png';
import './Home.css'

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

        <h1> this is Home</h1>



        <h1> At findex, we believe that taking control of your finances is an important part of budgeting
            <br/> Waht does financial freedom mean to you?
        </h1>





{/*         
        <VictoryChart
            domainPadding={20}
            // theme={VictoryTheme.greyscale}
            >
            <VictoryLegend x={125} y={50}
                gutter={30}
                style={{ border: { stroke: "black" }, title: {fontSize: 20 } }}
                orientation="horizontal"

                data={[
                    { name: "Budget" }, { name: "Total Expenses" }
                  ]}
                />
            <VictoryGroup
            offset={10}
            >            

                <VictoryBar 
                     color='#0080ff'
                    animate={{ duration: 1000 }}
                    data={data}
                    x="quarter"
                    y="budget"
                    />
                 <VictoryBar
                    animate={{ duration: 1000 }}
                    data={data2}
                    x="quarter"
                    y="expense"
                    />
                </VictoryGroup> 
        </VictoryChart> */}

        </div>
    )
}

export default Home;