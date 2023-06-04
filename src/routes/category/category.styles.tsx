import styled from 'styled-components';

export const TitleAndCategoryContainer = styled.div`
	padding: 0 40px;
	margin-bottom: 100px;
	hr {
		width: 500px;
	}
`;
export const CategoryContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 20px;
	row-gap: 50px;
	margin-top: 20px;
`;
export const Title = styled.h2`
	font-size: 34px;
	margin-bottom: 20px;
	text-align: center;
`;
