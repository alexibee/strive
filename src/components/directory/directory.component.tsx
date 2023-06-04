import { Key } from 'react';
import CatItem from '../directory-item/directory-item.component';
import { DirectoryContainer } from './directory.styles';

export type DirectoryCategory = {
	id: Key;
	title: string;
	imageUrl: string;
	route: string;
};

const categoriesList: DirectoryCategory[] = [
	{
		id: 1,
		title: 'hats',
		imageUrl:
			'https://res.cloudinary.com/dhoecmw9w/image/upload/v1667400639/development/hats_eiokpv.jpg',
		route: 'shop/hats',
	},
	{
		id: 2,
		title: 'jackets',
		imageUrl:
			'https://res.cloudinary.com/dhoecmw9w/image/upload/v1667400638/development/jackets_gcmdx4.jpg',
		route: 'shop/jackets',
	},
	{
		id: 3,
		title: 'sneakers',
		imageUrl:
			'https://res.cloudinary.com/dhoecmw9w/image/upload/v1667400639/development/sneakers_s6w8qs.jpg',
		route: 'shop/sneakers',
	},
	{
		id: 4,
		title: 'womens',
		imageUrl:
			'https://res.cloudinary.com/dhoecmw9w/image/upload/v1667400639/development/womens_y5dltv.jpg',
		route: 'shop/womens',
	},
	{
		id: 5,
		title: 'mens',
		imageUrl:
			'https://res.cloudinary.com/dhoecmw9w/image/upload/v1667400639/development/mens_v6dvb3.jpg',
		route: 'shop/mens',
	},
];

const Directory = () => {
	return (
		<DirectoryContainer>
			{categoriesList.map((category) => (
				<CatItem
					key={category.id}
					category={category}
				/>
			))}
		</DirectoryContainer>
	);
};

export default Directory;
