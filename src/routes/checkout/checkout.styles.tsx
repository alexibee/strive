import styled from 'styled-components';
import Button from '../../components/button/button.component';

export const CheckoutContainer = styled.div`
	width: 95%;
	display: grid;
	grid-auto-columns: 2fr 1fr;
	margin: 50px auto 150px auto;
`;

export const CheckoutCartContainer = styled.div`
	grid-column: 1;
	min-height: 60vh;
	min-width: 65%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 20px 40px;
	border: 1px solid black;
	h2 {
		margin: auto;
	}
`;

export const CheckoutMainHeader = styled.div`
	margin: 0 auto;
`;
export const BackButton = styled(Button)`
	margin: 0 auto;
`;

export const CheckoutItems = styled.div`
	width: 100%;
`;

export const CheckoutHeader = styled.div`
	border-bottom: 1px solid darkgrey;
	width: 100%;
	padding: 10px 0;
	display: flex;
	justify-content: space-between;
`;

export const HeaderBlock = styled.div`
	text-transform: capitalize;
	width: 23%;
	&:last-child {
		width: 8%;
	}
`;

export const TotalContainer = styled.div`
	grid-column: 2;
	margin: 0 0 0 20px;
	min-width: 30%;
	height: fit-content;
	padding: 30px;
	border: 1px solid black;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Total = styled.span`
	margin: 30px auto 0 auto;
	font-size: 24px;
`;

export const TotalTable = styled.div`
	width: 100%;
	margin: 30px 0;
	display: flex;
	flex-direction: column;
`;

export const TotalTableRow = styled.div`
	padding: 15px;
	margin: 10px 0;
	display: flex;
	justify-content: space-between;
`;

export const FinalTotal = styled(TotalTableRow)`
	font-weight: 700;
	border-top: 1px solid grey;
`;
