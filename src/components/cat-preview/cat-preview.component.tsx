import ProdCard from '../prod-card/prod-card.component';
import {
	CategoryPreviewContainer,
	CategoryTitle,
	Preview,
} from './cat-preview.styles';

import { CategoryItem } from '../../store/categories/category.types';
import { FC } from 'react';

type CategoryPreviewProps = {
	title: string;
	products: CategoryItem[];
};

const CatPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
	return (
		<CategoryPreviewContainer>
			<CategoryTitle to={title}>SHOP {title.toUpperCase()}</CategoryTitle>
			<hr />
			<Preview>
				{products
					.filter((_, index) => index < 4)
					.map((prod) => (
						<ProdCard
							key={prod.id}
							product={prod}
						/>
					))}
			</Preview>
		</CategoryPreviewContainer>
	);
};
export default CatPreview;
