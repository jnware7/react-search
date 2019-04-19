import { WITHDRAW, CHARITY } from '../actions/types'

export default (state, action) => {
  switch(action.type){
    case WITHDRAW:
    console.log(action.type, "action type");
    console.log(state, "state");
    console.log(action, "action");
    return {...state, previousAmount: state.totalAmount, totalAmount:action.totalAmount};
    case CHARITY:
    return {...state, previousAmount: state.totalAmount, totalAmount:action.totalAmount};
    default:
      return state;
  }
}
