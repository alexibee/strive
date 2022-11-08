import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CatsPreview from '../cats-preview/cats-preview.component';
import Category from '../category/category.component';

import './shop.styles.scss';
import { fetchCategoriesAsync } from '../../store/categories/category.action';
import { useEffect } from 'react';

const Shop = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCategoriesAsync());
	});

	return (
		<Routes>
			<Route
				index
				element={<CatsPreview />}
			/>
			<Route
				path=':category'
				element={<Category />}
			/>
		</Routes>
	);
};

export default Shop;
