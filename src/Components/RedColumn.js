import React, { useEffect, useState } from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import "../scss/RedColumn.scss";
import DontItem from "./DontItem";
import NewPopup from "./NewPopup";

const RedColumn = () => {
	const [items, setItems] = useState([]);
	const [displayPopup, setDisplayPopup] = useState(false);
	const [newHabit, setNewHabit] = useState("");

	const noDuplicateEntry = (hab) => {
		const habitNames = items.map((item) => item.name);
		return !habitNames.includes(hab);
	};
	useEffect(() => {
		setDisplayPopup(false);
		newHabit &&
			(noDuplicateEntry(newHabit)
				? setItems((prev) =>
						prev?.length
							? [
									...prev,
									{
										id: prev[prev?.length - 1]?.id + 1,
										name: newHabit,
										done: false,
										entries: [],
										entryTimes: [],
									},
							  ]
							: [
									{
										id: 1,
										name: newHabit,
										done: false,
										entries: [],
										entryTimes: [],
									},
							  ]
				  )
				: alert("You already have that habit genius!!"));
	}, [newHabit]);

	useEffect(() => {
		setNewHabit("");
		window.localStorage.setItem("ht_dont_items", JSON.stringify(items));
	}, [items]);

	useEffect(() => {
		const retrievedItems = JSON.parse(
			window.localStorage.getItem("ht_dont_items")
		);
		setItems(
			retrievedItems.length
				? retrievedItems
				: [
						{
							id: 1,
							name: "No Deep fry",
							done: false,
							entries: [],
							entryTimes: [],
						},
						{
							id: 2,
							name: "No toxicity",
							done: false,
							entries: [],
							entryTimes: [],
						},
				  ]
		);
	}, []);

	return (
		<div className="red">
			<div className="add-icon" onClick={() => setDisplayPopup(true)}>
				<MdOutlineAddCircleOutline />
			</div>
			<div className="table">
				{items.length ? (
					items?.map((item) => (
						<DontItem item={item} key={item.id} setItems={setItems} />
					))
				) : (
					<div className="no-items-message">
						First time for everything! Mention one habit here that you want to
						staaawwwp!
					</div>
				)}
			</div>
			<NewPopup
				doOrDont={false}
				setNewHabit={setNewHabit}
				displayPopup={displayPopup}
				setDisplayPopup={setDisplayPopup}
			/>
		</div>
	);
};

export default RedColumn;
