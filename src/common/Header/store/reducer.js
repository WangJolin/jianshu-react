import * as constants from './constants';
import { fromJS } from 'immutable';

// 将 state 包装成 immutable 对象
const defaultState = fromJS({ 
	focused: false, 
	mouseIn: false,
	list: [],
	page: 1,
	totalPage: 1
});

// eslint-disable-next-line
export default (state = defaultState, action) => {
	const { type, value } = action;
	switch (type) {
		case constants.SEARCH_FOCUS:
			return state.set('focused', true)
		case constants.SEARCH_BLUR:
			return state.set('focused', false)
		case constants.CHANGE_LIST:
			return state.merge({
				list: value,
				totalPage: action.totalPage
			})
		case constants.MOUSE_ENTER:
			return state.set('mouseIn', true)
		case constants.MOUSE_LEAVE:
			return state.set('mouseIn', false)
		case constants.CHNAGE_PAGE:
			return state.set('page', value)
		default:
			return state;
	}
};
