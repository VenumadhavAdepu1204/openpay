import styled from 'styled-components';

export const PriceCardDiv = styled.div`
    border: 1px solid black;
    width: auto;
    height: auto;
    border-radius: 4px;
    padding: 12px;
    display: flex;
    justify-content: space-between;

    &:hover {
        border: 1px solid blue;
    }
`;

export const Payments = styled.p`
margin-top: 6px;
margin-bottom: 6px;
font-size: 18px;
font-weight: 900;
color: blue;
`

export const Instalments = styled.span`
font-size: 14px;
`

