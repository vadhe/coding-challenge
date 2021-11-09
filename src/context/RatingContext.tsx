import * as React from 'react'

import Fetch from '../custom-hook/Fetch';
import RatingReducer from '../reducers/RatingReducer';
import { typeRatings } from '../type/types';

interface InterfaceRatingContext{
    ratings: typeRatings[],
    response: any,
    dispatch?: React.Dispatch<any>
}
export const RatingContext = React.createContext<InterfaceRatingContext>([] as unknown as InterfaceRatingContext);

const RatingProvider:React.FC<React.ReactNode> = ({children}) => {
    const [ratings, dispatch] = React.useReducer(RatingReducer,[])
    const [response] = Fetch()
    const value = {
        ratings,
        dispatch,
        response
    }
    return (
        <RatingContext.Provider value={value}>
            {children}
        </RatingContext.Provider>
    )
}

export default RatingProvider
