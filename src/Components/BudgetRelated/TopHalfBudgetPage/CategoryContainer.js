import React from 'react'


function CategoryContainer({selectedMonthData}){

    // console.log(selectedMonthData)
    // if (selectedMonthData) return <h2>Loading...</h2>;


    const categoriesList = selectedMonthData[0].categories.map(category => {
        return <p key={category.id}>{category.name}</p>
    })

    return( 
        <>
        <div className="category-container-div">
            <h1>categories here</h1>
        
            {categoriesList}

            <br></br>
        </div>
        </>
    )
}


export default CategoryContainer