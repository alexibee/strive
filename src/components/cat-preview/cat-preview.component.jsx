import './cat-preview.styles.scss';
import ProdCard from '../prod-card/prod-card.component';
import { Link } from 'react-router-dom';

const CatPreview = ({ title, products }) => {
	return (
		<div className='category-preview-container'>
			<Link
				to={title}
				className='cat-title'
			>
				SHOP {title.toUpperCase()}
			</Link>
			<hr />
			<div className='preview'>
				{products
					.filter((_, index) => index < 4)
					.map((prod) => (
						<ProdCard
							key={prod.id}
							product={prod}
						/>
					))}
			</div>
		</div>
	);
};
export default CatPreview;
