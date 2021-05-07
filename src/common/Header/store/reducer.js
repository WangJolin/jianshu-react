import * as constants from './constants';
import { fromJS } from 'immutable';

// 将 state 包装成 immutable 对象
const defaultState = fromJS({ 
	focused: false, 
	list: [] 
});

// eslint-disable-next-line
export default (state = defaultState, action) => {
	const { type,value } = action;

	switch (type) {
		case constants.SEARCH_FOCUS:
			return state.set('focused', true)
		case constants.SEARCH_BLUR:
			return state.set('focused', false)
		case constants.CHANGE_LIST:
			console.log('111');
			return state.set('list', value)
		default:
			return state;
	}

};
