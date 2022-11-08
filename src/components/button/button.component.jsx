import Spinner from '../spinner/spinner.component';
import './button.styles.scss';

export const BUTTON_STYLE_CLASSES = {
	google: 'google',
	inverted: 'inverted',
};

const Button = ({ children, btnStyle, isLoading, ...rest }) => {
	return (
		<button
			className={`button-container ${BUTTON_STYLE_CLASSES[btnStyle]}`}
			disabled={isLoading}
			{...rest}
		>
			{isLoading ? (
				<div className='btn-spi'>
					<Spinner />
				</div>
			) : (
				children
			)}
		</button>
	);
};

export default Button;
