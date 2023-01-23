import React, { useState } from "react";
import "../scss/DontItem.scss";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoCloseCircleSharp } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";

const DontItem = ({ item, setItems }) => {
	const [done, setDone] = useState(item.done);
	const setAsDone = async () => {
		await setDone((prev) => !prev);
		setItems((prev) => {
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
		color: done ? "#ca706bff" : "rgb(100, 100, 100)",
		textDecoration: done ? "line-through" : "none",
	};
	return (
		<div className="dont-item" style={customTextColor}>
			<div className="dont-item__checkbox" onClick={setAsDone}>
				{done ? <IoCloseCircleSharp /> : <IoCloseCircleOutline />}
			</div>
			<div className="dont-item__name">{item.name}</div>
			<div className="dont-item__buttons" onClick={deleteItem}>
				<MdDeleteForever />
			</div>
		</div>
	);
};

export default DontItem;
