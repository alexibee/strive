import CatPreview from '../../components/cat-preview/cat-preview.component';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector';

const CatsPreview = () => {
	const categoriesMap = useSelector(selectCategoriesMap);

	return (
		<>
			{Object.keys(categoriesMap).map((cat) => (
				<CatPreview
					key={cat}
					title={cat}
					products={categoriesMap[cat]}
				/>
			))}
		</>
	);
};

export default CatsPreview;
