import { createSelector } from 'reselect';
import { ModalState } from './modal.reducer';
import { RootState } from '../store';

const selectModalReducer = (state: RootState): ModalState => state.modal;

export const selectIsModalOpen = createSelector(
	[selectModalReducer],
	(modalSlice) => modalSlice.isModalOpen
);

export const selectModalType = createSelector(
	[selectModalReducer],
	(modalSlice) => modalSlice.modalType
);
