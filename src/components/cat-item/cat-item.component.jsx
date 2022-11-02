import { useNavigate } from 'react-router-dom';
import './cat-item.styles.scss';
import { UserContext } from '../../contexts/user.context';
import { useContext } from 'react';

const CatItem = ({ category }) => {
	const { currentUser } = useContext(UserContext);
	const { title, imageUrl } = category;
	const navigate = useNavigate();
	const route = currentUser ? `shop/${title}` : '/auth';
	const onNavigateHandler = () => navigate(route);

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
