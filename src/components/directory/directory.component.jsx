import CatItem from '../cat-item/cat-item.component';
import './directory.styles.scss';

const categoriesList = [
	{
		id: 1,
		title: 'hats',
		imageUrl:
			'https://res.cloudinary.com/dhoecmw9w/image/upload/v1667400639/development/hats_eiokpv.jpg',
	},
	{
		id: 2,
		title: 'jackets',
		imageUrl:
			'https://res.cloudinary.com/dhoecmw9w/image/upload/v1667400638/development/jackets_gcmdx4.jpg',
	},
	{
		id: 3,
		title: 'sneakers',
		imageUrl:
			'https://res.cloudinary.com/dhoecmw9w/image/upload/v1667400639/development/sneakers_s6w8qs.jpg',
	},
	{
		id: 4,
		title: 'womens',
		imageUrl:
			'https://res.cloudinary.com/dhoecmw9w/image/upload/v1667400639/development/womens_y5dltv.jpg',
	},
	{
		id: 5,
		title: 'mens',
		imageUrl:
			'https://res.cloudinary.com/dhoecmw9w/image/upload/v1667400639/development/mens_v6dvb3.jpg',
	},
];

const Directory = () => {
	return (
		<div className='categories-container'>
			{categoriesList.map((category) => (
				<CatItem
					key={category.id}
					category={category}
				/>
			))}
		</div>
	);
};

export default Directory;
