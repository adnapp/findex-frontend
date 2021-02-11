import React from "react"


function ProgressBar({budget, totalSpent}){


const percentage = (totalSpent/budget)*100

console.log(percentage)
// let percentage="50%"

let scaledPercentage
let progressBarColor
if (percentage >= 100){
     scaledPercentage = 100
     progressBarColor = "red"
} else if(percentage==0){
    progressBarColor = "rgb(165, 164, 187)"

}


else {
    scaledPercentage = percentage
    progressBarColor = "green"

}


const myStyle ={
    width: `${scaledPercentage}%`,
    background: progressBarColor,
    zIndex: 3,
    // background: "green"

}



return(
        <div className="progress-bar" >
                <div 
                    className="progress-filler" 
                    style={myStyle}>

                </div>

        </div>
)
}

export default ProgressBar