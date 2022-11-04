import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './category.styles.scss';

import ProdCard from '../../components/prod-card/prod-card.component';
import { selectCategoriesMap } from '../../store/categories/category.selector';

const Category = () => {
	const { category } = useParams();

	const categoriesMap = useSelector(selectCategoriesMap);
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
