import React, { useEffect, useState } from "react";
import "../scss/DoItem.scss";
import { MdOutlineCheck } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const DoItem = ({ item, setItems, items }) => {
	const [done, setDone] = useState(item.done);
	useEffect(() => {
		window.localStorage.setItem("ht_do_items", JSON.stringify(items));
		console.log(JSON.parse(localStorage["ht_do_items"]));
	}, [done]);

	const setAsDone = async () => {
		await setDone((prev) => !prev);
		await setItems((prev) => {
			prev.forEach((curr) => {
				if (curr.id === item.id) {
					const currentTime = Date.now();
					curr.done = done;
					curr.entries.push(new Date(currentTime).toLocaleDateString());
					curr.entryTimes.push(currentTime);
				}
			});
			return prev;
		});
	};
	const deleteItem = () => {
		setItems((prev) => prev.filter((curr) => curr.id !== item.id));
	};
	const customTextColor = {
		color: done ? "#6a994eff" : "rgb(100, 100, 100)",
		textDecoration: done ? "line-through" : "none",
	};
	return (
		<div className="do-item" style={customTextColor}>
			<div className="do-item__checkbox" onClick={setAsDone}>
				{done ? <IoCheckmarkDoneCircle /> : <MdOutlineCheck />}
			</div>
			<div className="do-item__name">{item.name}</div>
			<div className="do-item__buttons" onClick={deleteItem}>
				<MdDeleteForever />
			</div>
		</div>
	);
};

export default DoItem;
