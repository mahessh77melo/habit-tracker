import { initialState } from "./initialState";
import actionNames from "../actions/actionNames";

const habits = (state = initialState, action) => {
	switch (action.type) {
		case actionNames.addGreen:
			return {
				...state,
				greens: [
					...state.greens,
					{
						id: (state.greens[state.greens?.length - 1]?.id || 0) + 1,
						name: action.payload,
						done: false,
					},
				],
			};

		case actionNames.addRed:
			return {
				...state,
				reds: [
					...state.reds,
					{
						id: (state.reds[state.reds?.length - 1]?.id || 0) + 1,
						name: action.payload,
						done: false,
					},
				],
			};

		case actionNames.changeGreenDone:
			state.greens.forEach((curr) => {
				if (curr.id === action.payload.id) {
					curr.done = action.payload.done;
				}
			});
			console.log(state, action.payload);
			return state;

		case actionNames.changeRedDone:
			state.reds.forEach((curr) => {
				if (curr.id === action.payload.id) {
					curr.done = action.payload.done;
				}
			});
			return state;

		case actionNames.deleteGreen:
			return {
				...state,
				greens: state.greens.filter((curr) => curr.id !== action.payload),
			};

		case actionNames.deleteRed:
			return {
				...state,
				reds: state.reds.filter((curr) => curr.id !== action.payload),
			};

		default:
			return state;
	}
};

export default habits;
