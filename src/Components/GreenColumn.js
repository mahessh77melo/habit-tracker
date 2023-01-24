import React, { useEffect, useState } from "react";
import "../scss/GreenColumn.scss";
import DoItem from "./DoItem";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import NewPopup from "./NewPopup";
import { useSelector } from "react-redux";

const GreenColumn = () => {
	const items = useSelector((state) => state.habits.greens || []);
	const [displayPopup, setDisplayPopup] = useState(false);
	useEffect(() => {
		setDisplayPopup(false);
	}, [items]);

	return (
		<div className="green">
			<div className="add-icon" onClick={() => setDisplayPopup(true)}>
				<MdOutlineAddCircleOutline />
			</div>
			<div className="table">
				{items.length ? (
					items?.map((item) => (
						<DoItem item={item} key={item.id} items={items} />
					))
				) : (
					<div className="no-items-message">
						Start with a first step. Write down a habit you want to develop!!
					</div>
				)}
			</div>
			<NewPopup
				doOrDont={true}
				displayPopup={displayPopup}
				setDisplayPopup={setDisplayPopup}
			/>
		</div>
	);
};

export default GreenColumn;
