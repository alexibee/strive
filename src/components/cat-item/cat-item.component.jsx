import { useNavigate } from 'react-router-dom';
import './cat-item.styles.scss';

const CatItem = ({ category }) => {
	const { title, imageUrl } = category;
	const navigate = useNavigate();
	const onNavigateHandler = () => navigate(`shop/${title}`);

	return (
		<div
			onClick={onNavigateHandler}
			className='category-container'
		>
			<div
				className='background-image'
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>
			<div className='category-body-container'>
				<h2>{title}</h2>
				<p>Shop Now</p>
			</div>
		</div>
	);
};

export default CatItem;
