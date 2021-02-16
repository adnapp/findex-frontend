import React, {useState} from 'react'
import styled from "styled-components";
import { MdClose } from 'react-icons/md';


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
            <Background onClick={onClose} >
                <ModalWrapper onClick={e => e.stopPropagation()} >
                    <div className="modal-header">
                        <h4 className="modal-title">Current Monthly Income: ${currentIncome}</h4>
                    </div>
                    <ModalContent>
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
                    </ModalContent>
                    <CloseModalButton
                        aria-label='Close modal'
                         onClick={onClose}
                    />
                </ModalWrapper>
            </Background>
        </>

    )
}


export default Modal

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
    height: 180px;
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
//   .modal-content {
//     width: 500px;
//     background-color: #fff;
//   }
  
//   .modal-header, .modal-footer {
//     padding: 10px
//   }
  
//   .modal-title {
//     margin: 0;
//   }
  
//   .modal-body {
//     padding: 10px;
//     border-top: 1px solid #eee;
//     border-bottom: 1px solid #eee;
//     display: inline-block;
//   }



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

  
  