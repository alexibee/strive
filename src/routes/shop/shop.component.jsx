import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CatsPreview from '../cats-preview/cats-preview.component';
import Category from '../category/category.component';

import './shop.styles.scss';
import { getCategoriesAndDocs } from '../../utils/firebase/firebase.utils';
import { setCategories } from '../../store/categories/category.action';
import { useEffect } from 'react';

const Shop = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoriesArray = await getCategoriesAndDocs();
			dispatch(setCategories(categoriesArray));
		};
		getCategoriesMap();
	}, []);

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
