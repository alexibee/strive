import { useNavigate } from 'react-router-dom';
import {
	BackgroundImage,
	CategoryBodyContainer,
	CategoryContainer,
} from './directory-item.styles';
import { DirectoryCategory } from '../directory/directory.component';
import { FC } from 'react';

type DirectoryItemProps = {
	category: DirectoryCategory;
};

const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
	const { title, imageUrl, route } = category;
	const navigate = useNavigate();
	const onNavigateHandler = () => navigate(route);

	return (
		<CategoryContainer onClick={onNavigateHandler}>
			<BackgroundImage imageUrl={imageUrl} />
			<CategoryBodyContainer>
				<h2>{title}</h2>
				<p>Shop Now</p>
			</CategoryBodyContainer>
		</CategoryContainer>
	);
};

export default DirectoryItem;
