import './AddStar.css'

import * as React from 'react'

import Button from '../button/Button'
import Modal from '../modal/Modal'
import { ModalContext } from '../../context/ModalContext'
import { RatingContext } from '../../context/RatingContext'
import Star from '../star/Star'
import { StarContext } from '../../context/StarContex'

const AddStart:React.FC = () => {
    const {star, restartStar} = React.useContext(StarContext)
    const {handleShowModal} = React.useContext(ModalContext)
    const {dispatch} = React.useContext(RatingContext)
    const [label, setLabel] = React.useState("")
    const addStart = (event: React.FormEvent<EventTarget>) => {
        event.preventDefault();
        dispatch&& dispatch({type: 'ADD_START', rating:{label,star}})
        setLabel("")
        restartStar&& restartStar()
        handleShowModal&& handleShowModal()
    }
    return (
        <Modal>
            <div className="add-start">
              <h2>What's Your Rating ?</h2>
              <form>
                  <label htmlFor="rating">Rating</label>
                  <Star/>
                  <label htmlFor="label">Review</label>
                  <input autoComplete="off" id="label" name="label" value={label} onChange={(e) => setLabel(e.target.value)} type="text" placeholder="Start typing..." />
                  <Button label="Submit review" onClick={(e) => addStart(e)}/>
              </form>
            </div>
        </Modal>
    )
}

export default AddStart
