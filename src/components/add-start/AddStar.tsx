import './AddStar.css'

import * as React from 'react'

import Button from '../button/Button'
import Modal from '../modal/Modal'
import { RatingContext } from '../../context/RatingContext'
import { StarContext } from '../../context/StarContex'
import Start from '../start/Star'

const AddStart:React.FC = () => {
    const star = React.useContext(StarContext)?.star
    const dispatch = React.useContext(RatingContext)?.dispatch
    const ratings = React.useContext(RatingContext)?.ratings
    const [label, setLabel] = React.useState("")
    const addStart = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch({type: 'ADD_START', rating:{label,star}})
        console.log(ratings)
    }
    return (
        <Modal>
            <div className="add-start">
              <h2>What's Your Rating ?  {star}{label}</h2>
              <form>
                  <label htmlFor="rating">Rating</label>
                  <Start/>
                  <label htmlFor="label">Review</label>
                  <input id="label" name="label" value={label} onChange={(e) => setLabel(e.target.value)} type="text" placeholder="Start typing..." />
                  <Button label="Submit review" onClick={(event:React.FormEvent<HTMLFormElement>) => addStart(event)}/>
              </form>
            </div>
        </Modal>
    )
}

export default AddStart
