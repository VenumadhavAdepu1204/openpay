import React from 'react';
import opyLogo from '../../assets/logo-primary.svg'
import cartIcon from '../../assets/IconCart.svg';

import { HeaderDiv, BrandImage, CartImage, CartDiv } from './Header.styles';

type HeaderProps = {
    totalprice: string;
}

const Header: React.FunctionComponent<HeaderProps> = ({
    totalprice
}) => {
    return(
        <HeaderDiv>
            <div>
              <BrandImage src={opyLogo} alt='openpay logo'></BrandImage>
            </div>
            <CartDiv>
              <CartImage src={cartIcon} alt='cart icon'></CartImage>
				<p>{totalprice}</p>
            </CartDiv>
        </HeaderDiv>
    )
}

export default Header;
