import React, { useEffect, useState } from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { useSelector } from "react-redux";
import "../scss/RedColumn.scss";
import DontItem from "./DontItem";
import NewPopup from "./NewPopup";

const RedColumn = () => {
	const items = useSelector((state) => state.habits.reds || []);
	const [displayPopup, setDisplayPopup] = useState(false);
	useEffect(() => {
		setDisplayPopup(false);
	}, [items]);

	return (
		<div className="red">
			<div className="add-icon" onClick={() => setDisplayPopup(true)}>
				<MdOutlineAddCircleOutline />
			</div>
			<div className="table">
				{items.length ? (
					items?.map((item) => <DontItem item={item} key={item.id} />)
				) : (
					<div className="no-items-message">
						First time for everything! Mention one habit here that you want to
						staaawwwp!
					</div>
				)}
			</div>
			<NewPopup
				doOrDont={false}
				displayPopup={displayPopup}
				setDisplayPopup={setDisplayPopup}
			/>
		</div>
	);
};

export default RedColumn;
