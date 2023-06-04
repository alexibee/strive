import styled from 'styled-components';

export const ModalBackground = styled.div`
	z-index: 2;
	height: 100%;
	width: 100%;
	background: rgba(0, 0, 0, 0.2);
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0px;
	right: 0px;
	bottom: 0px;
	left: 0px;
`;
export const ModalWrapper = styled.div`
	width: fit-content;
	padding: 50px;
	height: fit-content;
	box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
	background: white;
	color: black;
	z-index: 10;
`;
