import * as React from 'react'
interface InterfaceStarContext{
  star: number 
  addStar?: (value: number) => void
  restartStar?: () => void
}
export const StarContext = React.createContext<InterfaceStarContext>({star:0});

const RatingProvider:React.FC<React.ReactNode> = ({children}) => {
    let [star, setStar] = React.useState(0);
    const addStar = (value: number):void => {
        setStar(value)
    }
    const restartStar = () => {
        setStar(0)
    }
    return (
        <StarContext.Provider value={{star, addStar, restartStar}}>
            {children}
        </StarContext.Provider>
    )
}

export default RatingProvider
