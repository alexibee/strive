import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BottomLineContainer = styled.div`
	height: 40px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 12px;
	font-weight: 100;
	padding: 0 40px;
	background-color: rgb(187, 188, 190);
`;
export const PageFooter = styled.div`
	height: 260px;
	width: 100%;
	margin-top: 40px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
export const InfoContainer = styled.div`
	width: 100%;
	display: grid;
	text-align: center;
	padding: 20px 40px 50px 40px;
	color: rgb(83, 83, 83);
	font-size: 12px;
	font-weight: 100;
	flex-grow: 1;
	background-color: rgb(224, 223, 223);
	grid-template-columns: repeat(4, 1fr);
`;

export const SignInLinks = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;
export const FooterLink = styled(Link)`
	margin: auto;
	&:hover {
		font-weight: 500;
	}
`;
export const FooterColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
