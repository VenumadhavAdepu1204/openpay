import React from 'react';
import { H1, PaymentDiv, P, DueAmount } from './planInfo.styles'

type PlanInfoProps = {
    depositAmount : String;
}

const PlanInfo: React.FunctionComponent<PlanInfoProps> = ({
    depositAmount,
}) => {
    return (
        <div>
            <H1>Plan Setup</H1>
            <p>pick the plan that best for you and your budget</p>
            <PaymentDiv>
                <P>Payment due today</P>
                <DueAmount>{depositAmount}</DueAmount>
            </PaymentDiv>
        </div>
    );
}

export default PlanInfo;
