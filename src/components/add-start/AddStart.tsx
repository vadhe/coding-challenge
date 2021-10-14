import './AddStart.css'

import * as React from 'react'

import Button from '../button/Button'
import Modal from '../modal/Modal'

const AddStart:React.FC = () => {
    return (
        <Modal>
            <div className="add-start">
              <h2>What's Your Rating ?</h2>
              <form action="">
                  <label htmlFor="rating">Rating</label>
                  <input type="text" placeholder="ini bintang" />
                  <label htmlFor="">Review</label>
                  <input type="text" placeholder="Start typing..." />
                  <Button label="Submit review" onClick={()=> alert("okokok")}/>
              </form>
            </div>
        </Modal>
    )
}

export default AddStart
