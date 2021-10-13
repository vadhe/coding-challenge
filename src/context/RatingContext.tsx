import * as React from 'react'
interface RatingContext{
    rating: number,
    addRating: () => void
}
export const RatingContext = React.createContext<RatingContext | null>(null);

const RatingProvider:React.FC<React.ReactNode> = ({children}) => {
    const [rating, setrating] = React.useState(5)
    const addRating = () => {
        setrating(rating + 1)
    }
    return (
        <RatingContext.Provider value={{rating, addRating}}>
            {children}
        </RatingContext.Provider>
    )
}

export default RatingProvider
