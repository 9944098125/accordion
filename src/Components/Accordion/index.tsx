import React from "react";
import { FaChevronDown } from "react-icons/fa";

import "./styles.css";
type AccordionProps = {
	item: {
		title: string;
		body: string;
	};
};
const Accordion = (props: AccordionProps) => {
	const { item } = props;
	const [clickedTitle, setClickedTitle] = React.useState(false);

	const handleClickTitle = () => {
		setClickedTitle(!clickedTitle);
	};

	return (
		<React.Fragment>
			<div onClick={handleClickTitle} className="each-accordion">
				<div className="title-container">
					<h4 className="title">{item.title}</h4>
					<FaChevronDown fontSize={45} color="violet" />
				</div>
				{clickedTitle && <div className="body-container">{item.body}</div>}
			</div>
		</React.Fragment>
	);
};

export default Accordion;
