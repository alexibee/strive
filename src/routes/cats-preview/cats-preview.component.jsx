import CatPreview from '../../components/cat-preview/cat-preview.component';
import './cats-preview.styles.scss';
import { useSelector } from 'react-redux';
import {
	selectCategoriesMap,
	selectCategoriesIsLoading,
} from '../../store/categories/category.selector';
import Spinner from '../../components/spinner/spinner.component';

const CatsPreview = () => {
	const categoriesMap = useSelector(selectCategoriesMap);
	const isLoading = useSelector(selectCategoriesIsLoading);

	return (
		<div className='cats-preview'>
			{isLoading ? (
				<Spinner />
			) : (
				Object.keys(categoriesMap).map((cat) => (
					<CatPreview
						key={cat}
						title={cat}
						products={categoriesMap[cat]}
					/>
				))
			)}
		</div>
	);
};

export default CatsPreview;
