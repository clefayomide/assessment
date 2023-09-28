import { useContext, useEffect, useState } from "react";
import "./App.css";
import { AppInput } from "./component";
import AppContext from "./context/app-context";
import { FILTER_DATA, RESET_DATA } from "./context/app-action";

function App() {
	const [searchQuery, setSearchQuery] = useState("");

	const { dispatch } = useContext(AppContext);

	// inorder to isolate the business logic from the component, i decided to place the useEffect in the page using the component (parent), this is a seperation of concern technique in react and making sure the component has no side effect
	useEffect(() => {
		if (searchQuery) {
			return dispatch({ type: FILTER_DATA, payload: searchQuery });
		}
		dispatch({ type: RESET_DATA, payload: searchQuery });
	}, [searchQuery]);

	return (
		<main className="app-main-wrapper">
			<AppInput
				className={"app-search-input-container"}
				inputClassName={"app-search-input"}
				value={searchQuery}
				setValue={setSearchQuery}
				placeholder={"Enter your search"}
			/>
		</main>
	);
}

export default App;
