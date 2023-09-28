import { useState } from "react";
import "./App.css";
import { AppImageSlider } from "./component";
import { data } from "./component/image-slider/data";

function App() {
	return (
		<main className="main-app-container">
			<AppImageSlider images={data} />
		</main>
	);
}

export default App;
