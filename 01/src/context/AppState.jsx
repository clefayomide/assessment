import AppContext from "./app-context";
import { useReducer } from "react";
import appReducerFunc from "./app-reducer";

const AppState = ({ children }) => {
	const initialState = { searchResult: [] };
	const [state, dispatch] = useReducer(appReducerFunc, initialState);
	return (
		<AppContext.Provider value={{ searchResult: state.searchResult, dispatch }}>
			{children}
		</AppContext.Provider>
	);
};

export default AppState;
