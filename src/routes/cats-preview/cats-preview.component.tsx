import CatPreview from '../../components/cat-preview/cat-preview.component';
import { useSelector } from 'react-redux';
import {
	selectCategoriesMap,
	selectCategoriesIsLoading,
} from '../../store/categories/category.selector';
import Spinner from '../../components/spinner/spinner.component';
import { selectIsModalOpen } from '../../store/modal/modal.selector';
import Modal from '../../components/modal/modal.component';
import { CategoriesPreview } from './cats-preview.styles';

const CatsPreview = () => {
	const categoriesMap = useSelector(selectCategoriesMap);
	const isLoading = useSelector(selectCategoriesIsLoading);
	const isModalOpen = useSelector(selectIsModalOpen);

	return (
		<>
			{!!isModalOpen && <Modal />}
			<CategoriesPreview>
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
			</CategoriesPreview>
		</>
	);
};

export default CatsPreview;
