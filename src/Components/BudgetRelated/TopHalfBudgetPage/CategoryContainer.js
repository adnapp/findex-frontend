import React, {useState} from 'react'
import CategoryCard from './CategoryCard'


function CategoryContainer({selectedMonthData, createCategory}){
    const [clicked, setClicked] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        budget: "",
        monthly_budget_id: ""
    })

    // console.log(selectedMonthData.id)
    // if (selectedMonthData) return <h2>Loading...</h2>;

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
    }


    const categoriesList = selectedMonthData.categories.map(category => {
        return  <CategoryCard key={category.id} category={category}/>
        
    })

    const categoryFormObj = (
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
    )

    return( 
        <>
        <div className="category-container-div">
            <h2>Categories:</h2>
            <div className="category-card-div">
                {categoriesList}
            </div>
            {!clicked ? <button className="add-category-button" onClick={() => setClicked(true)}>Create Category</button> : categoryFormObj}
            <br></br>
        </div>
        </>
    )
}


export default CategoryContainer