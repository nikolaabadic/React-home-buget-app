import * as types from './actionTypes'
import axios from '../../axios'

export  const setPayments = (payments) =>{
    return {
        type: types.SET_PAYMENTS,
        payments
    }
}

export  const getAllPaymentsError  = (error) =>{
    return {
        type: types.GET_ALL_PAYMENTS_ERROR,
        error
    }
}

export const getPayments = () => {
    return dispatch => {        
        axios.get('/payments.json')
        .then(res => {
            const fetchedPayments = []
            for(let key in res.data){
                fetchedPayments.push({
                    ...res.data[key],
                    id: key
                })
            }
            dispatch(setPayments(fetchedPayments))
        })
        .catch(e => {
            dispatch(getAllPaymentsError(e))
        })
    }
}

export const createPayment = (data) => {
    return dispatch => {        
        axios.post('/payments.json', data)
            .then(res => {
                dispatch(paymentSuccess(data))
            })
            .catch(e => {
                dispatch(paymentFailed(e))
            })
    }
}

export const paymentSuccess = (data) => {
    return {
        type: types.PAYMENT_SUCCESS,
        paymentData: data
    }
}

export const paymentFailed = (error) => {
    return {
        type: types.PAYMENYT_FAILED,
        error: error
    }
}

export const getAmount = () => {
    return {
        type: types.GET_AMOUNT
    }
}
