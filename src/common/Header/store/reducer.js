import * as constants from './constants';
import { fromJS } from 'immutable';

// 将 state 包装成 immutable 对象
const defaultState = fromJS({ focused: false });
// eslint-disable-next-line
export default (state = defaultState, action) => {
	const { type } = action;

	switch (type) {
		case constants.SEARCH_FOCUS:
			return state.set('focused', true)
		case constants.SEARCH_BLUR:
			return state.set('focused', false)
		default:
			return state;
	}

};
