
// import { typeRatings } from "../type/types"

const RatingReducer = (state:any, action:any) => {

  switch(action.type) {
    case "ADD_START": 
      return [
        ...state,
       {
        label: action.rating.label,
        star: action.rating.star
       }
      ]
    default: 
      return state
  }
}

export default RatingReducer

