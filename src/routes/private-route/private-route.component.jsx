import {
	selectCurrentUser,
	selectUserIsLoading,
} from '../../store/user/user.selector';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Spinner from '../../components/spinner/spinner.component';

const PrivateRoute = ({ children }) => {
	const currentUser = useSelector(selectCurrentUser);
	const isLoading = useSelector(selectUserIsLoading);
	return (
		<>
			{!isLoading && !currentUser ? (
				<Navigate to='/auth' />
			) : isLoading ? (
				<Spinner />
			) : (
				children
			)}
		</>
	);
};

export default PrivateRoute;
