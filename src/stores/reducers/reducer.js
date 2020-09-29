import translateHelloWorld from '../../utils/translateHelloWorld';

const INITIAL_STATE = {
	msg: 'Hello World',
};

export const ReducerTypes = {
	TRANSLATE_MSG: 'TRANSLATE_MSG',
};

export const ReducerActions = {
	translateMsg() {
		return (dispatch, getState) => {
			const state = getState().reducer;

			dispatch({
				type: ReducerTypes.TRANSLATE_MSG,
				payload: translateHelloWorld(state.msg),
			});
		};
	},
};

export default function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case ReducerTypes.TRANSLATE_MSG:
			return { ...state, msg: action.payload };
		default:
			return state;
	}
}
