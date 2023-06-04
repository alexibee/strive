import styled from 'styled-components';

export const DoubleButtonContainer = styled.div`
	opacity: 0.7;
	position: absolute;
	top: 255px;
	display: none;
	width: 90%;

	#half-button {
		min-width: 0;
	}
`;
export const ProductCartContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	height: 350px;
	align-items: center;
	position: relative;
	img {
		width: 100%;
		height: 95%;
		object-fit: cover;
		margin-bottom: 5px;
	}
	// button {
	// 	width: 80%;
	// 	opacity: 0.7;
	// 	position: absolute;
	// 	top: 255px;
	// }
	&:hover {
		img {
			opacity: 0.8;
		}
		${DoubleButtonContainer} {
			opacity: 0.85;
			display: flex;
			justify-content: space-between;
			#whole-button {
				flex-grow: 1;
			}
			#half-button {
				flex-grow: 1;
			}
		}
	}
`;

export const Footer = styled.div`
	width: 100%;
	height: 5%;
	display: flex;
	justify-content: space-between;
	font-size: 18px;
`;

export const Name = styled.span`
	width: 90%;
	margin-bottom: 15px;
`;

export const Price = styled.span`
	width: 10%;
`;

export const QuantityCounter = styled.span`
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 35px 0 35px;
	font-size: 15px;
	background-color: black;
	color: white;
	text-transform: uppercase;
	font-weight: bolder;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: white;
	color: black;
	border: 1px solid black;
	margin: 0 2px;
`;
