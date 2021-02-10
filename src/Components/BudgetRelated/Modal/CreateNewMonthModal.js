import React, {useState} from 'react'

function CreateNewMonthModal({show, onClose, setSelectedMonthNumber}){
    
    const [formData, setFormData] = useState({
        name: "",
        year: 2021,
        month: 1,
        budget: "",
        user_id: 11
    })

    if (!show){
        return null
    }

    function handleSubmit(e){
        e.preventDefault()
      
        fetch(`${process.env.REACT_APP_API_BASE_URL}/monthly_budgets`, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          })
          .then(response => response.json())
          .then(data => setSelectedMonthNumber(data.id))

        setFormData({
            name: "",
            year: "",
            month: "",
            budget: ""
        })
        onClose()
    }

    function handleChange(event){
        const name = event.target.name; 
        let value = event.target.value;

        setFormData({
            ...formData,
            [name]: value,
        })
    }

    function clearFormOnClose(){
        setFormData({
            name: "",
            year: "",
            month: "",
            budget: ""
        })
        onClose()
    }

    return(
        <>
            <div className="modal" onClick={clearFormOnClose} >
                <div className="modal-content" onClick={e => e.stopPropagation()} >
                    <div className="modal-header">
                        <h4 className="modal-title">Create new monthly budget</h4>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit} className="modal-new-form">
                            <label>Name</label>
                            <input 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}                            />
                            <label>Budget</label>
                            <input 
                                type="number"
                                name="budget"
                                value={formData.budget}
                                onChange={handleChange}
                            />
                            <label>select month</label>
                            <select onChange={handleChange} name="month">
                                <option default value="1">January</option>
                                <option value="2">February</option>
                                <option value="3">March</option>
                                <option value="4">April</option>
                                <option value="5">May</option>
                                <option value="6">June</option>
                                <option value="7">July</option>
                                <option value="8">August</option>
                                <option value="9">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </select>
                            <label> Year</label>
                            <select onChange={handleChange} name="year">
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                            </select>
                            <button  type="submit" className="button-modal-close">
                                Submit
                            </button>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button onClick={clearFormOnClose} className="button-modal-close">
                            Cancel
                        </button>
                    </div>               
                </div>
            </div>
        </>

    )
}


export default CreateNewMonthModal