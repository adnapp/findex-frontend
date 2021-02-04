import React from 'react'
import CategoryCard from './CategoryCard'


function CategoryContainer({selectedMonthData}){

    // console.log(selectedMonthData)
    // if (selectedMonthData) return <h2>Loading...</h2>;


    const categoriesList = selectedMonthData.categories.map(category => {
        return  <CategoryCard key={category.id} category={category}/>
        
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