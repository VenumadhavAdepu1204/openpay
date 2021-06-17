import React from 'react';
import { PriceCardDiv, Payments, Instalments } from './priceCard.styles';

const PAYMENT_COUNT_LABEL = "Remaining payments";

type PriceCardProps =  {
    paymentCount : number,
    planDuration: number,
    price: String,
}

const PriceCard: React.FunctionComponent<PriceCardProps> = ({
    paymentCount,
    planDuration,
    price,
}) => {

    const duration = `Total plan duration ${planDuration} months`;
    return(
        <PriceCardDiv>
          <div>
						<Payments>{paymentCount} {PAYMENT_COUNT_LABEL}</Payments>
						<Instalments>{duration}</Instalments>
					</div>
          <div>
						<h1>{price}</h1>
					</div>
        </PriceCardDiv>
    )
}

export default PriceCard;
