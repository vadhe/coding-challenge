import { typeRatings } from './../type/types';

// import { typeRatings } from "../type/types"
interface rating extends typeRatings{}
interface Action {
  type: string,
  rating:rating
}
const RatingReducer = (state:typeRatings[], action:Action) => {

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

