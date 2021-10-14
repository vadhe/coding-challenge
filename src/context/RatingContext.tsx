import * as React from 'react'
interface RatingContext{
    rating: {label:string, start: number}[],
    // addRating: () => void
}
export const RatingContext = React.createContext<RatingContext | null>(null);

const RatingProvider:React.FC<React.ReactNode> = ({children}) => {
    const [rating, setrating] = React.useState([
        {
            label:"ini adalah sebuah label",
            start:  2
        },
        {
            label:"ini adalah sebuah label 2",
            start:  5
        }
    ])
    // const addRating = () => {
    //     setrating(rating + 1)
    // }
    return (
        <RatingContext.Provider value={{rating}}>
            {children}
        </RatingContext.Provider>
    )
}

export default RatingProvider
