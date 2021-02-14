import React, { useState, useEffect } from 'react';
import {  Doughnut } from "react-chartjs-2";



function MonthGraph({selectedMonthData}){
    const [chartData, setChartData] = useState({})
    
    const categoryLabels = selectedMonthData.categories.map(data => data.name)
    const categoryData = selectedMonthData.categories.map(data => data.budget)

    function chart(){
        setChartData({
            labels: categoryLabels,
            datasets: [
                {
                    data: categoryData,
                    lineTension: 0.1,
                    backgroundColor: ["#9acd32","#006400", "#228b22", "#3cb371","#00fa9a","#98fb98", "#3cb371", "#bdffbe", "#808000", "556b2f"],
                    borderColor: ["#9acd32","#006400", "#228b22", "#3cb371","#00fa9a","#98fb98", "#3cb371",  "#bdffbe", "#808000","556b2f" ],
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "#2085d8",
                    pointBackgroundColor: "#FFF",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "#2f3640",
                    pointHoverBorderColor: "#2085d8",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                }
            ]
        })
    }

    useEffect(() => {
        chart()
    }, [selectedMonthData])

    let chartOptions = {
        responsive: true,
        title: { text: "Budget Broken Down into Categories", 
                display:true, 
                fontSize: 30 
        },    
        legend: {
            position: 'left',
            labels: {
                fontSize: 18,
                padding: 12
            }
        },
        cutoutPercentage: 40,
        animation: {
            animateRotate: false,
            animateScale: true
          }
    
        
    }


    return(
        <div className="doughnut-chart">
            <Doughnut
                data={chartData} 
                options={chartOptions} 
            />
            
        </div>
    );
}


export default MonthGraph