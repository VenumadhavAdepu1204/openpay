import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { default as Actions } from './utils/actions';
import Header from './components/Header/header';
import SelectionPage from './container/selectionPage/selectionPage'

import { AppDiv } from './App.styles';

type AppProps = {
  actions: any,
  paymentDetails: {
		data: {
      purchasePrice: string,
			depositAmount: string,
			ScheduledOptions: [{
				interval: string,
				paymentCount: number,
				instalmentAmount: string
			}]
		},
		status: string
	},
}

const App: React.FunctionComponent<AppProps> = ({
  actions,
  paymentDetails,
}) => {

  return (
    <AppDiv>
      <header className="App-header">
        <Header totalprice={paymentDetails?.data?.purchasePrice} />
        <SelectionPage actions={actions} paymentDetails={paymentDetails} />
      </header> 
    </AppDiv>
  );
}

const mapStateToProps = (store: any) => {
  return {
    paymentDetails: store.paymentDetails
  }
};

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
