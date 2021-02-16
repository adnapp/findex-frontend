import React from "react"


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
    // zIndex: 3,
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