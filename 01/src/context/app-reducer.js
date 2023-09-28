import { FILTER_DATA, RESET_DATA } from "./app-action";
import { data } from "../searchData";

const appReducerFunc = (state, action) => {
	switch (action.type) {
		case FILTER_DATA:
			const result = data.filter((d) =>
				d.title.toLowerCase().includes(action.payload.toLowerCase())
			);
			return {
				...state,
				searchResult: result,
			};

		case RESET_DATA:
			return {
				...state,
				searchResult: [],
			};

		default:
			return state;
	}
};

export default appReducerFunc;
