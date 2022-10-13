import './button.styles.scss';

const BUTTON_STYLE_CLASSES = {
	google: 'google-sign-in',
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
