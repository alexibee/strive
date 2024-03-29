import styled from 'styled-components';

export const PaymentFormContainer = styled.div`
	height: 300px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
export const FormContainer = styled.form`
	height: 100px;
	min-width: 500px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	h2,
	button {
		margin: 30px auto;
	}
`;
export const Alert = styled.span`
	margin: 10px auto;
	color: red;
`;
