import Spinner from '../spinner/spinner.component';
import './button.styles.scss';

export const BUTTON_STYLE_CLASSES = {
	google: 'google',
	inverted: 'inverted',
	invertedSm: 'inverted-sm',
};

const Button = ({ children, btnStyle, isLoading, addClass, ...rest }) => {
	return (
		<button
			className={`button-container ${BUTTON_STYLE_CLASSES[btnStyle]} ${
				addClass ? addClass : ''
			}`}
			disabled={isLoading}
			{...rest}
		>
			{isLoading ? (
				<div className='btn-spin'>
					<Spinner />
				</div>
			) : (
				children
			)}
		</button>
	);
};

export default Button;
