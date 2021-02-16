import React from "react"
import ReactDOM from 'react-dom'
// import Logo from './topOfPageLogo.png';


// import { 
//     VictoryBar, 
//     VictoryChart, 
//     VictoryGroup, 
//     VictoryLegend } from 'victory';

function Home(){


    


    // const data = [
    //     {quarter: 1, budget: 13000},
     
    //   ];

    // const data2 = [
    //     {quarter: 1, expense: 20000},
     
    //   ];





    return(
        <div>
        <h1> this is Home</h1>

        {/* <img src={Logo} alt="hi"/> */}







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