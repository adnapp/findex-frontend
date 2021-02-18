import React, {useState} from 'react'
import { useSpring, animated } from 'react-spring';
import styled from "styled-components";
import { MdClose } from 'react-icons/md';


function CreateNewMonthModal({show, onClose, setSelectedMonthNumber}){
    
    const [formData, setFormData] = useState({
        name: "",
        year: 2021,
        month: 1,
        budget: "",
        user_id: 11
    })

    const animation = useSpring({
        config: {
          duration: 250
        },
        opacity: show ? 1 : 0,
        transform: show ? `translateY(0%)` : `translateY(-100%)`
      });

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
            <Background onClick={clearFormOnClose} >
            <animated.div style={animation}>

                <ModalWrapper onClick={e => e.stopPropagation()} >
                    <ModalContent>
                    <div className="modal-header">
                        <h4 className="modal-title">Create Budget for a New Month</h4>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit} className="modal-new-form">
                            <label>Name</label>
                            <input 
                                name="name"
                                value={formData.name}
                                onChange={handleChange} />
                                <br/>
                            <label>Budget</label>
                            <input 
                                type="number"
                                name="budget"
                                value={formData.budget}
                                onChange={handleChange}
                            />
                            <br/>
                            <label>Select Month: </label>
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
                            <br/><br/>
                            <label> Year: </label>
                            <select onChange={handleChange} name="year">
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                            </select>
                            <br/>
                            <button  type="submit" className="button-modal-close">
                                Submit
                            </button>
                        </form>
                    </div>

                    </ModalContent>  
                    <CloseModalButton
                        aria-label='Close modal'
                         onClick={clearFormOnClose}
                    />           
                </ModalWrapper>
                </animated.div>

            </Background>
        </>

    )
}


export default CreateNewMonthModal


const Background = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.8);
    display: flex;
    align-items:center;
    justify-content: center;
    width: 100%;
    height: 100%;
`

const ModalWrapper = styled.div`
    width: 500px;
    background-color: #bfbfbf;
    // height: 180px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    color: #000;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 10;
    border-radius: 10px;
    text-align: center;
`
//    display: grid;


const ModalContent = styled.div`
     padding: 10px;
     border-top: 1px solid #eee;
     border-bottom: 1px solid #eee;
     display: inline-block;
     button {
        padding: 10px 21px;
        background: #141414;
        color: #fff;
        border: none;
        margin-left: 5px;
      }
`

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;