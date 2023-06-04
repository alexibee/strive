import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CategoryPreviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;
	hr {
		width: 500px;
	}
`;
export const CategoryTitle = styled(Link)`
	font-size: 28px;
	margin-bottom: 15px;
	cursor: pointer;
	align-self: center;
	&:hover {
		color: grey;
	}
`;

export const Preview = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 20px;
	padding: 40px 0;
`;
