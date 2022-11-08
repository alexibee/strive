import './button.styles.scss';

export const BUTTON_STYLE_CLASSES = {
	google: 'google',
	inverted: 'inverted',
};

const Button = ({ children, btnStyle, ...rest }) => {
	return (
		<button
			className={`button-container ${BUTTON_STYLE_CLASSES[btnStyle]}`}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
