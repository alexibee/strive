import { useSpring, animated } from 'react-spring';
import { MouseEvent, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectIsModalOpen,
	selectModalType,
} from '../../store/modal/modal.selector';
import { setIsModalOpen } from '../../store/modal/modal.action';
import PaymentForm from '../payment-form/payment-form.component';
import Confirmation from '../confirmation/confirmation.component';
import { ModalBackground, ModalWrapper } from './modal.styles';

const Modal = () => {
	const modalRef = useRef<HTMLDivElement>(null);
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
	const closeModal = (e: MouseEvent) => {
		if (modalRef.current === e.target) {
			dispatch(setIsModalOpen(false));
		}
	};

	return isModalOpen ? (
		<ModalBackground
			ref={modalRef}
			onClick={closeModal}
		>
			<animated.div style={animation}>
				<ModalWrapper>
					{!!(modalType && modalType === 'payment') && <PaymentForm />}
					{!!(modalType && modalType === 'confirmation') && <Confirmation />}
				</ModalWrapper>
			</animated.div>
		</ModalBackground>
	) : null;
};
export default Modal;
