import { WITHDRAW, CHARITY } from './types'

export const withdraw = (totalAmount, withdraw) => {
  return {
    type:WITHDRAW,
    totalAmount: totalAmount - withdraw
  }
}

export const charity = (previousAmount, totalAmount) => {

return  totalAmount === 0 ?
   {
    type:CHARITY,
    totalAmount:previousAmount
  }
  :
  {
    type:CHARITY,
    totalAmount: 0
  }
}
