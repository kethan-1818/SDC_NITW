import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Aiml from "./Aiml";
import Coding from "./Coding";
import Design from "./Design";
import Cybersecurity from "./Cybersecurity";
import "./domain.css";
import ParticlesComponent from "../../component/particle";




function Domains() {
	return (
		<div className="resources-container">
            <ParticlesComponent id="particles" ></ParticlesComponent>
			<Tab />
		</div>
	);
}
export default Domains;

// List of buttons
const buttonsList = ["CODING", "AIML", "DESIGN","CYBER SECURITY"];

function renderButtons(toggleTab, tabState) {
	return buttonsList.map(tabButton => {
		return (
			<button
				key={buttonsList.indexOf(tabButton) + 1}
				type="button"
				onClick={() => toggleTab(buttonsList.indexOf(tabButton) + 1)}
				className={
					tabState === buttonsList.indexOf(tabButton) + 1 ? "active" : ""
				}
			>
				{tabButton}
			</button>
		);
	});
}

function Tab() {
	const [tabState, setTab] = useState(1);

	const toggleTab = index => {
		setTab(index);
	};

	const location = useLocation();
	useEffect(() => {
		toggleTab(location.state.option);
	}, [location]);

	return (
		<>
			<div className="resources-tabs">{renderButtons(toggleTab, tabState)}</div>
			<div className="resources-contents">
				<div
					className={
						tabState === 1 ? "resources-content active" : "resources-content"
					}
				>
					<Coding />
				</div>
				<div
					className={
						tabState === 2 ? "resources-content active" : "resources-content"
					}
				>
					<Aiml />
				</div>
				<div
					className={
						tabState === 3 ? "resources-content active" : "resources-content"
					}
				>
					<Design />
				</div>
                <div
					className={
						tabState === 4 ? "resources-content active" : "resources-content"
					}
				>
					<Cybersecurity />
				</div>

			</div>
		</>
	);
}


