import React from "react"
import styled from "styled-components"

function ProgressBar({budget, totalSpent}){


let percentage = (totalSpent/budget)*100

let progressBarColor
if (percentage > 100){
     percentage = 100
     progressBarColor = "red"
} else if(percentage==0){
    progressBarColor = "rgb(165, 164, 187)"
}else if(percentage==100){
    progressBarColor = "#347c17"
}else if(percentage >= 90 && percentage < 100){
    progressBarColor = "rgb(203, 172, 48)"

}else {
    progressBarColor = "rgb(95, 142, 167)"
}

const myStyle ={
    width: `${percentage}%`,
    background: progressBarColor,
}



return(
        <ProgressBarDiv >
                <div 
                    className="progress-filler" 
                    style={myStyle}>
                </div>
        </ProgressBarDiv>
)
}

const ProgressBarDiv = styled.div`
height: 8px;
border-radius: 5px;
width: 88%;
margin: 0 auto;
background: rgb(165, 164, 187);
border:1px #ccc solid;
z-index: 0;`

export default ProgressBar