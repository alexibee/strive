import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './category.styles.scss';

import { CategoriesContext } from '../../contexts/categories.context';
import ProdCard from '../../components/prod-card/prod-card.component';

const Category = () => {
	const { category } = useParams();
	const { categoriesMap } = useContext(CategoriesContext);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);

	return (
		<div className='title-and-category-container'>
			<h2 className='title'>{category.toUpperCase()}</h2>
			<hr />
			<div className='cat-container'>
				{!!products &&
					products.map((prod) => (
						<ProdCard
							key={prod.id}
							product={prod}
						/>
					))}
			</div>
		</div>
	);
};

export default Category;
