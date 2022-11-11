import { createSelector } from 'reselect';

const selectModalReducer = (state) => state.modal;

export const selectIsModalOpen = createSelector(
	[selectModalReducer],
	(modalSlice) => modalSlice.isModalOpen
);

export const selectModalType = createSelector(
	[selectModalReducer],
	(modalSlice) => modalSlice.modalType
);
