import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const PlanInfoDiv = styled.div`
    display:flex;
    justify-content: center;
`

export const StyledButton = styled(Button)(() => ({
    '&.MuiButton-outlined': {
        marginRight: '6px'
    },
    '&.active': {
        color: 'blue'
    },

}));

export const PickPlan = styled.div`
    margin-top: 32px;
`
export const SubmitButtonDiv = styled.div`
margin: 24px;
display: flex;
justify-content: center;
`
export const SubmitButton = styled(Button)(() => ({
    width: '15rem'
}))