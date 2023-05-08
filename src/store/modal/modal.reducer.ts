import { AnyAction } from 'redux';
import { setIsModalOpen, setModalType } from './modal.action';

export type ModalState = {
	readonly isModalOpen: boolean;
	readonly modalType: string;
};

const MODAL_INITIAL_STATE = {
	isModalOpen: false,
	modalType: '',
};

export const modalReducer = (
	state = MODAL_INITIAL_STATE,
	action: AnyAction
): ModalState => {
	if (setIsModalOpen.match(action)) {
		return { ...state, isModalOpen: action.payload };
	}
	if (setModalType.match(action)) {
		return { ...state, modalType: action.payload };
	}
	return state;
};
