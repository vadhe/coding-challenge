import './Modal.css'

import * as React from 'react'

const Modal:React.FC = ({children}) => {
    return (
        <div className="container-modal">
           {children}
        </div>
    )
}

export default Modal
