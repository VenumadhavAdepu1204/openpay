const FETCH_PAYMENT_INT_DETAILS_SUCCESS = 'FETCH_PAYMENT_INT_DETAILS_SUCCESS'

const INITIAL_STATE = {
    data : null,
    status: ''
}

export const PaymentIntervalDetails = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case FETCH_PAYMENT_INT_DETAILS_SUCCESS: {
            return Object.assign({}, state, {
                status: 'Success',
                data: action.data
            })
        }
        default: {
            return state
        }
    }
}