import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import CatPreview from '../../components/cat-preview/cat-preview.component';

const CatsPreview = () => {
	const { categoriesMap } = useContext(CategoriesContext);

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
