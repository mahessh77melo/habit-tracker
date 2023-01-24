import React, { useEffect, useState } from "react";
import "../scss/DontItem.scss";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoCloseCircleSharp } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { changeRedDone, deleteRed } from "../actions";

const DontItem = ({ item }) => {
	const [done, setDone] = useState(item.done);
	const dispatch = useDispatch();
	const setAsDone = async () => {
		await setDone((prev) => !prev);
	};

	useEffect(() => {
		dispatch(changeRedDone(item.id, done));
	}, [done, dispatch, item.id]);
	const deleteItem = () => {
		dispatch(deleteRed(item.id));
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
