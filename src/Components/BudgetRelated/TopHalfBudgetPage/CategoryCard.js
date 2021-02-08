import React from 'react'


function CategoryCard({category}){

    // console.log(selectedMonthData)
    // if (selectedMonthData) return <h2>Loading...</h2>;
    const {name, budget} = category;

    // console.log(category)

    const totalSpent = category.transactions.map(transaction => {
        return transaction.amount
    }).reduce(( accumulator, currentValue ) => accumulator + currentValue,
        0
      ).toFixed(2)

    // console.log(totalSpent)
    

    return( 
        <>
        <div className="category-card-div">
            <h3>{name}</h3>
            <h5>Budget: {budget}</h5>
            <h5>Total Spent: {totalSpent}</h5>
        
        </div>
        </>
    )
}


export default CategoryCard