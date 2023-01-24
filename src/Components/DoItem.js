import React, { useEffect, useState } from "react";
import "../scss/DoItem.scss";
import { MdOutlineCheck } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { changeGreenDone, deleteGreen } from "../actions";

const DoItem = ({ item }) => {
	const [done, setDone] = useState(item.done);
	const dispatch = useDispatch();

	const setAsDone = async () => {
		await setDone((prev) => !prev);
	};
	useEffect(() => {
		dispatch(changeGreenDone(item.id, done));
	}, [done, dispatch, item.id]);

	const deleteItem = () => {
		dispatch(deleteGreen(item.id));
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
