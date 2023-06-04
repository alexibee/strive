import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProdCard from '../../components/prod-card/prod-card.component';
import Spinner from '../../components/spinner/spinner.component';
import {
	selectCategoriesIsLoading,
	selectCategoriesMap,
} from '../../store/categories/category.selector';
import {
	CategoryContainer,
	Title,
	TitleAndCategoryContainer,
} from './category.styles';

type CategoryRouteParams = {
	category: string;
};

const Category = () => {
	const { category } = useParams<
		keyof CategoryRouteParams
	>() as CategoryRouteParams;

	const categoriesMap = useSelector(selectCategoriesMap);
	const isLoading = useSelector(selectCategoriesIsLoading);
	const [products, setProducts] = useState(categoriesMap[category]);

	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);

	return (
		<TitleAndCategoryContainer>
			<Title>{category.toUpperCase()}</Title>
			<hr />
			{isLoading ? (
				<Spinner />
			) : (
				<CategoryContainer>
					{!!products &&
						products.map((prod) => (
							<ProdCard
								key={prod.id}
								product={prod}
							/>
						))}
				</CategoryContainer>
			)}
		</TitleAndCategoryContainer>
	);
};

export default Category;
