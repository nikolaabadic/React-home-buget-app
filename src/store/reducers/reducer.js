import * as types from '../actions/actionTypes'

const initialState = {
    payments: [],
    amount: 0
}

const calculateAmount = (payments) => {
    let amount = 0
    payments.forEach(element => {
        if(element.type === 'income'){
            amount += Number(element.amount)
        } else {
            amount -= Number(element.amount)
        }
    })
    return amount
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case(types.SET_PAYMENTS):{
            return{
                ...state,
                payments: action.payments,                
                amount: calculateAmount(action.payments)
            }
        }
        default: return state
    }
}

export default reducer