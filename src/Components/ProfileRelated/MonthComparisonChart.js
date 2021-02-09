import React, {useEffect, useState} from "react"
import { Bar } from 'react-chartjs-2';


function MonthComparisonChart({allMonths}){
    const [chartData, setChartData] = useState({})

    console.log(allMonths)


    const monthlyBudget = allMonths.map(month=> {
        return month.categories.map(category => (category.budget))
        .reduce(( accumulator, currentValue ) => accumulator + currentValue,0)
    })
    
    console.log("budget",monthlyBudget)

    const monthlyActuals = allMonths.map(month=> {
        return month.transactions.map(transaction => transaction.amount)
        .reduce(( accumulator, currentValue ) => accumulator + currentValue,0)
    })

    console.log("Actuals", monthlyActuals)
    
    const monthNames = allMonths.map(month=> month.name)

    console.log(monthNames)





    //chart


    function chart(){
        setChartData({
            labels: monthNames,
            datasets: [
                {
                    data: monthlyActuals,
                    lineTension: 0.1,
                    backgroundColor: ["#9acd32","#006400", "#228b22", "#3cb371","#00fa9a","#98fb98", "#3cb371", "#bdffbe", "#808000", "556b2f"],
                    borderColor: ["#9acd32","#006400", "#228b22", "#3cb371","#00fa9a","#98fb98", "#3cb371",  "#bdffbe", "#808000","556b2f" ],
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "#2085d8",
                    pointBackgroundColor: "#FFF",
  
                    pointHoverBackgroundColor: "#2f3640",
                    pointHoverBorderColor: "#2085d8",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    label: "actuals"
                },
                {
                    data: monthlyBudget,
                    lineTension: 0.1,
                    backgroundColor: ["#0f52ba", "#0f52ba", "#0f52ba", "#0f52ba"],//,"#006400", "#228b22", "#3cb371","#00fa9a","#98fb98", "#3cb371", "#bdffbe", "#808000", "556b2f"],
                    borderColor: ["#0f52ba"],//,"#006400", "#228b22", "#3cb371","#00fa9a","#98fb98", "#3cb371",  "#bdffbe", "#808000","556b2f" ],
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "#2085d8",
                    pointBackgroundColor: "#FFF",
             
                    pointHoverBackgroundColor: "#2f3640",
                    pointHoverBorderColor: "#2085d8",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    label: "budget"
                }
            ]
        })
    }

    //scales stacks the chart, if I wanted bar graph made up of different categories
    let chartOptions = {
        // scales: {
        //     xAxes: [{
        //         stacked: true
        //     }],
        //     yAxes: [{
        //         stacked: true
        //     }]
        // }
    }



    useEffect(() => {
        chart()
    }, [])




    return( 
        <>
        <h3>MonthComparisonChart</h3>
        <div className="monthly-comparison-chart-div">
            <Bar
                data={chartData}
                options={chartOptions}
            />
        </div>

        </>
    )
}


export default MonthComparisonChart;