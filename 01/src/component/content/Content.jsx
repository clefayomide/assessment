import React from "react";
import "./content.css";
import { classnames } from "../../utils/classnames";

const Content = ({ className, data }) => {
	const props = { className: `app-content-container ${classnames(className)}` };
	return (
		<>
			<section {...props}>
				{data.length > 0 && (
					<ul className="app-content-list">
						{data?.map((d) => (
							<li key={d.title} className="app-content-list-item">
								{d.title}
							</li>
						))}
					</ul>
				)}
			</section>
			{/* <footer className="app-content-footer"></footer> */}
		</>
	);
};

export default Content;
