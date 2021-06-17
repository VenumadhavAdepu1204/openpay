import { polyfill } from 'es6-promise'

import * as fetchPaymentIntActions from '../container/selectionPage/selectionPage.action'

polyfill()

const ActionCreators = Object.assign({},
    fetchPaymentIntActions
);

export default ActionCreators;

