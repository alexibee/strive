import './modal.styles.scss';
import { useSpring, animated } from 'react-spring';
import { useRef } from 'react';

const Modal = ({ isOpen, setIsOpen, children }) => {
	const modalRef = useRef();

	const animation = useSpring({
		config: {
			duration: 250,
		},
		opacity: isOpen ? 1 : 0,
		transform: isOpen ? `translateY(0%)` : `translateY(-100%)`,
	});
	const closeModal = (e) => {
		if (modalRef.current === e.target) {
			setIsOpen(false);
		}
	};

	return isOpen ? (
		<div
			className='modal-bground'
			ref={modalRef}
			onClick={closeModal}
		>
			<animated.div style={animation}>
				<div className='modal-wrapper'>{children}</div>
			</animated.div>
		</div>
	) : null;
};
export default Modal;
