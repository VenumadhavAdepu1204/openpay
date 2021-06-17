const FETCH_PAYMENT_INT_DETAILS = 'FETCH_PAYMENT_INT_DETAILS'
const FETCH_PAYMENT_INT_DETAILS_SUCCESS = 'FETCH_PAYMENT_INT_DETAILS_SUCCESS'

export const fetchPaymentintervalDetails = () => {
    return {
        type: FETCH_PAYMENT_INT_DETAILS,
    }
}

export const fetchPaymentIntervalSuccess = (data: any) => {
    return {
        type: FETCH_PAYMENT_INT_DETAILS_SUCCESS,
        data,
    }
}