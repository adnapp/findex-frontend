import React, {useState} from 'react'
import ProgressBar from './ProgressBar';
import styled from "styled-components";
import {AiFillDelete, AiFillEdit } from "react-icons/ai";



function CategoryCard({category, handleRemoveCategory, submitCategoryEdit}){
    const [isEditClicked, setIsEditClicked] = useState(false)
    const {name, budget, id} = category;
    const [categoryName, setCategoryName] = useState(name)
    const [budgetValue, setBudgetValue] = useState(budget)

    const totalSpent = category.transactions.map(transaction => {
        return transaction.amount
    }).reduce(( accumulator, currentValue ) => accumulator + currentValue,
        0
      ).toFixed(2)

    //   const data1 = [
    //       {spending: 1, spent: totalSpent}
    //   ]

    //   const data2 = [
    //     {"budgeted": 1, spent: budget}
    // ]

    const categoryDataObj = (
        <>
        
            <h3>{name}</h3>
            <ProgressBar budget={budget} totalSpent={totalSpent}/>
            <h5>Budget: ${budget}</h5>
            <h5>Total Spent: ${totalSpent}</h5>
            
            <DeleteCategoryButton data-id={id} onClick={() => handleRemoveCategory(id)}/>
            <EditCategoryButton data-id={id} onClick={() => setIsEditClicked(!isEditClicked)} />
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
            <CategoryCardDiv>
                {categoryDataObj}
            </CategoryCardDiv> : 
            <CategoryCardDiv>
                {categoryEditForm}
                <button onClick={()=> setIsEditClicked(!isEditClicked)}>Cancel</button>
            </CategoryCardDiv> }
        </>
    )
}

const CategoryCardDiv = styled.div`
    border:1px #ccc solid;
    width: 20%;
    border-radius: 5px;
    text-align:center;
    background: #f5f5f5;
    :hover {
        transform: scale(1.05);
        box-shadow: 2px 5px black;
      }
    `

const DeleteCategoryButton = styled(AiFillDelete)`
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    width: 16px;
    height: 16px;
    padding: 0;
    z-index: 10;
`


const EditCategoryButton = styled(AiFillEdit)`
    cursor: pointer;
    z-index: 10;
    width: 16px;
    height: 16px;
    padding: 0;
    position: absolute;
    top: 10px;
    right: 30px;

`

export default CategoryCard