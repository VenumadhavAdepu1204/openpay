import React, { useEffect, useState }  from "react";
import { Grid } from '@material-ui/core';
import PlanInfo from '../../components/atoms/planInfo/planInfo';
import PriceCard from '../../components/atoms/priceCard/priceCard';
import { REPAYMENT_CONST } from './constants';

import { PlanInfoDiv, StyledButton, PickPlan, SubmitButtonDiv, SubmitButton } from './selectionPage.styles';
const PICK_PLAN = 'Pick your plan';
const STEP_1 = 'STEP 1';
const STEP_2 = 'STEP 2';
const REPAYMENT_FREQUENCY = 'Pick your repayment frequency';
const SUBMIT_PLAN = 'Submit Plan';

type WelcomeProps = {
	actions: any,
	paymentDetails: {
		data: {
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

const SelectionPage: React.FunctionComponent<WelcomeProps> = ({
	actions,
	paymentDetails,
}) => {

	const [depositAmount, setDepositAmount] = useState('');
	const [scheduledOptions, setscheduledOptions] = useState([{}])
	const [selectedInterval, setSelectedInterval] = useState('weekly');
	const [selectedWeeks, setSelectedWeeks] = useState(4);

	useEffect(() => {
		if (paymentDetails.status === '') {
			actions.fetchPaymentintervalDetails();
		}
		if(paymentDetails.status === 'Success') {
			setDepositAmount(paymentDetails?.data?.depositAmount);
			setscheduledOptions(paymentDetails?.data?.ScheduledOptions);
		}
	}, [paymentDetails.status])

	const handleClick = (value: any) => {
		setSelectedInterval(value.interval);
		setSelectedWeeks(value.weeksPerMonth);
	}
    return (
      <>
        <PlanInfoDiv>
            <PlanInfo depositAmount={depositAmount}/>
        </PlanInfoDiv>
				<div>
					<h4>{STEP_1}</h4>
					<p>{REPAYMENT_FREQUENCY}</p>
					{REPAYMENT_CONST.map(value => {
						return (
							<StyledButton variant="outlined" color="primary" onClick={() => handleClick(value)}>{value.interval}</StyledButton>
						)
					})
					}		
				</div>
				<PickPlan>
					<h4>{STEP_2}</h4>
					<p>{PICK_PLAN}</p>
					<Grid container spacing={2}>
						{scheduledOptions.length > 0 && scheduledOptions.map((option: any) => {
							if (option.interval === selectedInterval) {
								const duration = option.paymentCount / selectedWeeks;
								return (
									<Grid item xs={12} sm={6}>
										<PriceCard
											paymentCount={option.paymentCount}
											planDuration={duration}
											price={option.instalmentAmount} />
									</Grid>
									
								)
							}
						})

						}
						
					</Grid>
				</PickPlan>
				<SubmitButtonDiv>
					<SubmitButton variant="contained" color="primary">{SUBMIT_PLAN}</SubmitButton>
				</SubmitButtonDiv>
      </>
    );
}

export default SelectionPage;
