import React, {useState} from 'react'
import CategoryCard from './CategoryCard'
import styled from "styled-components"


function CategoryContainer({selectedMonthData, createCategory, handleRemoveCategory, submitCategoryEdit}){
    const [clicked, setClicked] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        budget: "",
        monthly_budget_id: ""
    })

    function handleChange(event){
        const name = event.target.name; 
        let value = event.target.value;

   
        setFormData({
            ...formData,
            [name]: value,
            monthly_budget_id: selectedMonthData.id
        })
    }
    
    function handleSubmit(e){
        e.preventDefault();
        createCategory(formData)
        setClicked(false)
        setFormData({
            name: "",
            budget: "",
            monthly_budget_id: ""
        })
    }

    const sortedCategoriesList = selectedMonthData.categories.sort((a, b)=> b.budget - a.budget)

    const categoriesList = sortedCategoriesList.map(category => {
        return  <CategoryCard 
                    key={category.id} 
                    category={category} 
                    handleRemoveCategory={handleRemoveCategory}
                    submitCategoryEdit = {submitCategoryEdit}
                />
    })

    const categoryFormObj = (
        <div>
            <form className="category-new-form" onSubmit={handleSubmit}>
                <input 
                    placeholder="Category Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange} 
                />
                <input
                    type="number"
                    placeholder="Budget"
                    name="budget"
                    value={formData.amount}
                    onChange={handleChange}
                />
                <button type="submit">Create</button>
            </form>
            <button onClick={() => setClicked(false)}>Cancel</button>
        </div>
    )

    const createCategoryButtonObj = (
        <div className="create-category-button-div">
            <br></br>
            <AddCategoryButton onClick={() => setClicked(true)}>
                Create New Category
            </AddCategoryButton>
        </div>
    )

    return( 
        <>
        <h2>Categories:</h2>
        <div className="category-container-div">
            
            {categoriesList}
            <br></br>
        </div>
            {!clicked ? createCategoryButtonObj : categoryFormObj}
        </>
    )
}

const AddCategoryButton = styled.button`
    background: #060b26;
    border-radius: 15px;
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 50;
    padding: 8px;
  text-decoration: none;
    display: inline-block;
    cursor: pointer;
    text-align: center;
    :hover {
        border: solid #337FED 1px;
        background: #3D94F6;
        border-radius: 20px;
        text-decoration: none;
    }
`


export default CategoryContainer