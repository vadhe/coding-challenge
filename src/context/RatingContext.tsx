import * as React from 'react'

import RatingReducer from '../reducers/RatingReducer';
import { typeRatings } from '../type/types';

interface InterfaceRatingContext{
    ratings: typeRatings[],
    dispatch?: any
}
export const RatingContext = React.createContext<InterfaceRatingContext>({
    ratings: [{
        label: "ini label",
        star: 4
    }],
});

const RatingProvider:React.FC<React.ReactNode> = ({children}) => {
    const [ratings, dispatch] = React.useReducer(RatingReducer,[])
    return (
        <RatingContext.Provider value={{ratings, dispatch}}>
            {children}
        </RatingContext.Provider>
    )
}

export default RatingProvider
