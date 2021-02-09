import React, {useState} from 'react'


function CategoryCard({category, handleRemoveCategory, submitCategoryEdit}){
    const [isEditClicked, setIsEditClicked] = useState(false)
    const {name, budget, id} = category;
    const [categoryName, setCategoryName] = useState(name)
    const [budgetValue, setBudgetValue] = useState(budget)

    // console.log(category)

    const totalSpent = category.transactions.map(transaction => {
        return transaction.amount
    }).reduce(( accumulator, currentValue ) => accumulator + currentValue,
        0
      ).toFixed(2)

    // console.log(isEditClicked)
    const categoryDataObj = (
        <>
            <h3>{name}</h3>
            <h5>Budget: {budget}</h5>
            <h5>Total Spent: {totalSpent}</h5>
            <button
                className="delete-category-btn" 
                data-id={id}
                onClick={() => handleRemoveCategory(id)}
            >🗑</button>
            <button
                className="edit-category-btn" 
                data-id={id}
                onClick={() => setIsEditClicked(!isEditClicked)}            
            >✏️</button>
            </>
    )

    //handle new category form submit
    function handleSubmit(e){
        e.preventDefault()
        
        submitCategoryEdit({
            id: id,
            name: categoryName,
            budget: parseInt(budgetValue)
        })

        setIsEditClicked(!isEditClicked)

    }

    // edit category form
    const categoryEditForm = (

        <form className="edit-category-form" onSubmit={handleSubmit}>
            <label> Name:</label>
            <input
                name="name"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
            />
            <label> Budget:</label>
            <input 
                name="budget"
                value = {budgetValue}
                onChange={(e) => setBudgetValue(e.target.value)}
            />

            <button 
                type="submit">
                    submit
            </button>
        </form>
    )

    return( 
        <>
        {!isEditClicked ? 
            <div className="category-card-div">
                {categoryDataObj}
            </div> : 
            <div className="category-card-div">
                {categoryEditForm}
            </div> }
        </>
    )
}


export default CategoryCard