import * as React from 'react'
interface InterfaceStarContext{
  star: number 
  //   setStar: React.useState(0);
  addStar: (value: number) => void
}
export const StarContext = React.createContext<InterfaceStarContext | null>(null);

const RatingProvider:React.FC<React.ReactNode> = ({children}) => {
    let [star, setStar] = React.useState(0);
    const addStar = (value: number):void => {
        setStar(value)
    }
    return (
        <StarContext.Provider value={{star, addStar}}>
            {children}
        </StarContext.Provider>
    )
}

export default RatingProvider
