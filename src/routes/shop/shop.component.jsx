import { useContext } from 'react';
import ProdCard from '../../components/prod-card/prod-card.component';
import { ProdContext } from '../../contexts/prod.context';
import './shop.styles.scss';

const Shop = () => {
	const { prodList } = useContext(ProdContext);
	return (
		<div className='prods-container'>
			{prodList.map((product) => {
				return (
					<ProdCard
						key={product.id}
						product={product}
					/>
				);
			})}
		</div>
	);
};

export default Shop;
