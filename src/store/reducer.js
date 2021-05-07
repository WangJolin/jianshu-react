import { reducer as headerReducer } from '../common/Header/store';

import { combineReducers } from 'redux';

const reducer = combineReducers({
	header: headerReducer,
});
export default reducer;
