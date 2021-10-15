import * as React from 'react'

import RatingReducer from '../reducers/RatingReducer';
import { typeRatings } from '../type/types';

interface InterfaceRatingContext{
    ratings: typeRatings[],
    dispatch: any
}
export const RatingContext = React.createContext<InterfaceRatingContext | null>(null);

const RatingProvider:React.FC<React.ReactNode> = ({children}) => {
    const [ratings, dispatch] = React.useReducer(RatingReducer,[
        {
            label:"ini adalah sebuah label",
            start:  2
        },
    ])
    // const [rating, setrating] = React.useState([
        
        // {
        //     label:"ini adalah sebuah label 2",
        //     start:  5
        // }
    // ])
    // const addRating = () => {
       
    // }
    return (
        <RatingContext.Provider value={{ratings, dispatch}}>
            {children}
        </RatingContext.Provider>
    )
}

export default RatingProvider
