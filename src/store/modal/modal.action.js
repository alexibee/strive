import { MODAL_ACTION_TYPES } from './modal.types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const setIsModalOpen = (bool) =>
	createAction(MODAL_ACTION_TYPES.SET_IS_MODAL_OPEN, bool);

export const setModalType = (string) =>
	createAction(MODAL_ACTION_TYPES.SET_MODAL_TYPE, string);
