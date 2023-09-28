import React from "react";
import "./button.css";
import { classnames } from "../../utils/classnames";

const Button = ({ className, children, ...rest }) => {
	return (
		<button className={`app-slider-btn ${classnames(className)}`} {...rest}>
			{children}
		</button>
	);
};

export default Button;
