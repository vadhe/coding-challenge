import './Start.css'

import startnone from '../../assets/images/none.png'
import starton from '../../assets/images/on.png'

const Start = () => {
    return(
        <div className="start">
            <img src={starton} />
            <img src={starton} />
            <img src={startnone} />
            <img src={startnone} />
            <img src={startnone} />
        </div>
    )
};

export default Start;
