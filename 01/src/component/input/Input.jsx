import React, { useContext } from "react";
import "./input.css";
import { SearchIcon } from "../../assets/icons";
import { AppNoResult, AppSearchResult } from "..";
import AppContext from "../../context/app-context";
import { classnames } from "../../utils/classnames";

const Input = ({ placeholder, setValue, value, className, inputClassName }) => {
	const { searchResult } = useContext(AppContext);
	return (
		<section className={`app-input-container ${classnames(className)}`}>
			<div>
				<input
					className={`app-input ${classnames(inputClassName)}`}
					placeholder={placeholder}
					onChange={(e) => setValue(e.target.value)}
					value={value}
				/>
				<AppSearchResult data={searchResult} className={"app-search-result"} />
				{value && searchResult.length < 1 && <AppNoResult />}
			</div>
			<SearchIcon className={"app-input-search-icon"} />
		</section>
	);
};

export default Input;
