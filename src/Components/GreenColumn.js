import React, { useEffect, useState } from "react";
import "../scss/GreenColumn.scss";
import DoItem from "./DoItem";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import NewPopup from "./NewPopup";

const GreenColumn = () => {
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
		// window.localStorage.setItem("ht_do_items", JSON.stringify(items));
		console.log("items changed");
		console.log(JSON.parse(localStorage["ht_do_items"]));
	}, [items]);

	useEffect(() => {
		const retrievedItems = JSON.parse(
			window.localStorage.getItem("ht_do_items")
		);
		setItems(
			retrievedItems.length
				? retrievedItems
				: [
						{
							id: 1,
							name: "Hit the gym",
							done: false,
							entries: [],
							entryTimes: [],
						},
						{
							id: 2,
							name: "Read 10 pages",
							done: false,
							entries: [],
							entryTimes: [],
						},
				  ]
		);
	}, []);

	return (
		<div className="green">
			<div className="add-icon" onClick={() => setDisplayPopup(true)}>
				<MdOutlineAddCircleOutline />
			</div>
			<div className="table">
				{items.length ? (
					items?.map((item) => (
						<DoItem
							item={item}
							key={item.id}
							setItems={setItems}
							items={items}
						/>
					))
				) : (
					<div className="no-items-message">
						Start with a first step. Write down a habit you want to develop!!
					</div>
				)}
			</div>
			<NewPopup
				doOrDont={true}
				setNewHabit={setNewHabit}
				displayPopup={displayPopup}
				setDisplayPopup={setDisplayPopup}
			/>
		</div>
	);
};

export default GreenColumn;
