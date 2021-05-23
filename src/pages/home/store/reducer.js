import { fromJS } from 'immutable';

const defaultState = fromJS({
	topicList: [],
	articleList: [],
	recommendList: [],
	writterList: [],
});
// eslint-disable-next-line
export default (state = defaultState, action) => {
	const { type, value } = action;
	const newState = JSON.parse(JSON.stringify(state));
	switch (type) {
		case value:
			break;

		default:
			return newState;
	}
};
