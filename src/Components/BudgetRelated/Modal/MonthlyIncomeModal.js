import React, {useState} from 'react'

function Modal({show, onClose, currentIncome, updateMonthBudget}){
    const [newIncome, setNewIncome] = useState("")

    if (!show){
        return null
    }

    function handleSubmit(e){
        e.preventDefault()
        updateMonthBudget({budget: newIncome})
        setNewIncome("")
        onClose()
    }

    return(
        <>
            <div className="modal" onClick={onClose} >
                <div className="modal-content" onClick={e => e.stopPropagation()} >
                    <div className="modal-header">
                        <h4 className="modal-title">Current Monthly Income: ${currentIncome}</h4>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit} className="modal-new-form">
                            <input 
                                type="number"
                                name="amount"
                                value={newIncome}
                                onChange={(e) => setNewIncome(e.target.value)}
                            />
                            <button  type="submit" className="button-modal-close">
                                Submit
                            </button>
                            
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button onClick={onClose} className="button-modal-close">
                            Cancel
                        </button>
                    </div>               
                </div>
            </div>
        </>

    )
}


export default Modal