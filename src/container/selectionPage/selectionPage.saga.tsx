import { call, put, takeEvery, select } from "redux-saga/effects";
import mockPaymentDetails from '../mockData/mockPaymentDetails.json';

import { default as actions } from '../../utils/actions'
const FETCH_PAYMENT_INT_DETAILS = 'FETCH_PAYMENT_INT_DETAILS'

export function * fetchPaymentIntervalDetails () {
    try {
        const mockData = mockPaymentDetails;
        yield put(actions.fetchPaymentIntervalSuccess(mockData))
    } catch (error) {
        // add error related code here
    }
}

export default function * watchPaymentInterval () {
    yield takeEvery(FETCH_PAYMENT_INT_DETAILS, fetchPaymentIntervalDetails)
}