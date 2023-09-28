import React from "react";
import { AppSearchCard } from "..";
import "./no-result.css";
import { NotFound } from "../../assets/icons";

const NoResult = () => {
	return (
		<AppSearchCard className={"app-no-result-card"}>
			<NotFound className={"not-found-icon"} />
			<div>No data found</div>
		</AppSearchCard>
	);
};

export default NoResult;
