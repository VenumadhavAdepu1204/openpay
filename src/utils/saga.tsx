import { all } from 'redux-saga/effects';

import paymentDetailsSaga from '../container/selectionPage/selectionPage.saga';

export default function * rootSaga() {
    yield all([
        paymentDetailsSaga(),
    ])
}