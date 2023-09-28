import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

const Card = ({ content }) => {
	return <div className="card">{content}</div>;
};

const App = () => {
	const [quotes, setQuotes] = useState([]);
	const [loading, setLoading] = useState(false);
	const [page, setPage] = useState(1);
	const [error, setError] = useState(false);

	const getQuotes = async () => {
		setLoading(true);

		const response = await fetch(`https://quotable.io/quotes?page=${page}`);
		if (response.status >= 200 && response.status <= 299) {
			const data = await response.json();
			setQuotes(data.results);
			setLoading(false);
			setError(false);
		} else {
			setError(true);
			setLoading(false);
		}
	};
	useEffect(() => {
		getQuotes();
	}, [page]);

	if (loading) {
		return <div className="loading">Loading...</div>;
	}

	if (error) {
		return <div className="loading">An Error Occurred..</div>;
	}
	return (
		<>
			<div className="card-container">
				{quotes?.map((quote) => (
					<Card key={quote.content} content={quote.content} />
				))}
			</div>
			<div className="more-button-container">
				<button
					className="more-button"
					onClick={() => setPage((prev) => prev + 1)}
				>
					Next Page
				</button>
			</div>
		</>
	);
};

export default App;
