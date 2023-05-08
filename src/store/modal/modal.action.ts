import { MODAL_ACTION_TYPES } from './modal.types';
import {
	ActionWithPayload,
	createAction,
	withMatcher,
} from '../../utils/reducer/reducer.utils';
import('../../utils/reducer/reducer.utils');

export type SetIsModalOpen = ActionWithPayload<
	MODAL_ACTION_TYPES.SET_IS_MODAL_OPEN,
	boolean
>;
export type SetModalType = ActionWithPayload<
	MODAL_ACTION_TYPES.SET_MODAL_TYPE,
	string
>;

export const setIsModalOpen = withMatcher(
	(bool: boolean): SetIsModalOpen =>
		createAction(MODAL_ACTION_TYPES.SET_IS_MODAL_OPEN, bool)
);

export const setModalType = withMatcher(
	(string: string): SetModalType =>
		createAction(MODAL_ACTION_TYPES.SET_MODAL_TYPE, string)
);
