import React from "react";
import "./card.css";
import { classnames } from "../../utils/classnames";

const Card = ({ className, children }) => {
	const props = { className: `app-card-container ${classnames(className)}` };
	return <section {...props}>{children}</section>;
};

export default Card;
