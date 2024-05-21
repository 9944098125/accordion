import React from "react";
import "./App.css";
import Accordion from "./Components/Accordion";

const listItems = [
	{
		id: 1,
		title: "First Title",
		body: "First Body",
	},
	{
		id: 2,
		title: "Second Title",
		body: "Second Body",
	},
	{
		id: 3,
		title: "Third Title",
		body: "Third Body",
	},
	{
		id: 4,
		title: "Forth Title",
		body: "Forth Body",
	},
	{
		id: 5,
		title: "Fifth Title",
		body: "Fifth Body",
	},
];
function App() {
	return (
		<div className="App">
			{listItems.map((item) => (
				<Accordion key={item.id} item={item} />
			))}
		</div>
	);
}

export default App;
