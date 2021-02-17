import React, {useEffect, useState} from "react"
import { Bar } from 'react-chartjs-2';
import styled from "styled-components";


function MonthComparisonChart({allMonths}){
    const [chartData, setChartData] = useState({})


    const allMonthsSorted = allMonths.sort((a, b) => a.id > b.id ? 1 : -1)

    console.log(allMonthsSorted)
    const monthlyBudget = allMonthsSorted.map(month=> month.budget)
    //use below if want to sum up all category budgets
    // const monthlyBudget = allMonthsSorted.map(month=> {
    //     return month.categories.map(category => (category.budget))
    //     .reduce(( accumulator, currentValue ) => accumulator + currentValue,0)
    // })
   
    const monthlyActuals = allMonthsSorted.map(month=> {
        return month.transactions.map(transaction => transaction.amount)
        .reduce(( accumulator, currentValue ) => accumulator + currentValue,0)
    })

    
    const monthNames = allMonths.map(month=> month.name)

   
    function chart(){
        setChartData({
            labels: monthNames,
            datasets: [
                {
                    data: monthlyActuals,
                    lineTension: 0.1,
                    backgroundColor: ["#3cb371","#3cb371", "#3cb371", "#3cb371","#3cb371","#3cb371", "#3cb371", "#3cb371", "#3cb371", "3cb371"],
                    borderColor: ["#3cb371"],
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
                    label: "Actual Spend ($)"
                },
                {
                    data: monthlyBudget,
                    lineTension: 0.1,
                    backgroundColor: ["#0f52ba", "#0f52ba", "#0f52ba", "#0f52ba","#0f52ba", "#0f52ba", "#0f52ba","#0f52ba","#0f52ba", "#3cb371", "#0f52ba", "#0f52ba", "556b2f"],
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
                    label: "Income ($)"
                }
            ]
        })
    }

    //scales stacks the chart, if I wanted bar graph made up of different categories
    let chartOptions = {
        responsive: true,
        title: { text: "Income vs. Actual Spending per Month", 
                display:true, 
                fontSize: 38,
                fontColor: "#FFFFFF"
        },    
        legend: {
            position: 'left',
            labels: {
                fontSize: 18,
                padding: 12,
                fontColor: "#FFFFFF"
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    fontColor: 'white'
                },
            }],
          xAxes: [{
                ticks: {
                    fontColor: 'white'
                },
            }]
        } ,
        cutoutPercentage: 40,
        animation: {
            animateRotate: false,
            animateScale: true
          }
    }

    useEffect(() => {
        chart()
    }, [])


    return( 
        <>
        <BarChartDiv>
            <Bar
                data={chartData}
                options={chartOptions}
            />
        </BarChartDiv>

        </>
    )
}

const BarChartDiv = styled.div`
    position: relative;
    height:30vh; 
    width:60vw

`


export default MonthComparisonChart;