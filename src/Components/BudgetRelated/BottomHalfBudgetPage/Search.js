import React from 'react'


function Search({categoriesList, handleChange}){


//filter transactions here


    return( 
        <div className="txn-search-card-div">
            <label>Find transaction by category </label>
            
            <select onChange={(e) => handleChange(e.target.value)}>
                <option defaultValue="all">All</option>
                {categoriesList}
            </select>
        </div>
    )
}


export default Search