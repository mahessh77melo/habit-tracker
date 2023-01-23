import React from "react";
import "../scss/TitleColumn.scss";
import walter from "../walter.png";

const TitleColumn = () => {
	return (
		<div className="title">
			<div className="title__icon">
				<img className="walter-icon" src={walter} alt="Walter logo" />
			</div>
			<div className="title__name">Walter's</div>
			<div className="title__header">Habit Tracker</div>
			<div className="title__content">
				<div className="title__content--1">
					{" "}
					{"<---"} <span className="do">Do(s)</span>
				</div>
				<div className="title__content--2">
					<span className="dont">Don't(s)</span> {"--->"}
				</div>
			</div>
		</div>
	);
};

export default TitleColumn;
