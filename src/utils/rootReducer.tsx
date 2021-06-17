import { combineReducers } from "redux";
import * as PaymentReducer from '../container/selectionPage/selectionPage.reducer';

const allReducers = Object.assign({}, 
    PaymentReducer
)

const appReducers = combineReducers({
    paymentDetails: allReducers.PaymentIntervalDetails,
});

const rootReducer = (state: any, action: any) => {
    return appReducers(state, action);
}

export default rootReducer;