import './modal.styles.scss';
import { useSpring, animated } from 'react-spring';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectIsModalOpen,
	selectModalType,
} from '../../store/modal/modal.selector';
import { setIsModalOpen } from '../../store/modal/modal.action';
import PaymentForm from '../payment-form/payment-form.component';
import Confirmation from '../confirmation/confirmation.component';

const Modal = () => {
	const modalRef = useRef();
	const isModalOpen = useSelector(selectIsModalOpen);
	const modalType = useSelector(selectModalType);
	const dispatch = useDispatch();

	const animation = useSpring({
		config: {
			duration: 300,
		},
		opacity: isModalOpen ? 1 : 0,
		transform: isModalOpen ? `translateY(0%)` : `translateY(-100%)`,
	});
	const closeModal = (e) => {
		if (modalRef.current === e.target) {
			dispatch(setIsModalOpen(false));
		}
	};

	return isModalOpen ? (
		<div
			className='modal-bground'
			ref={modalRef}
			onClick={closeModal}
		>
			<animated.div style={animation}>
				<div className='modal-wrapper'>
					{!!(modalType && modalType === 'payment') && <PaymentForm />}
					{!!(modalType && modalType === 'confirmation') && <Confirmation />}
				</div>
			</animated.div>
		</div>
	) : null;
};
export default Modal;
