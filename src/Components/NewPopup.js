import React, { useState } from "react";
import "../scss/NewPopup.scss";
import { FaWindowClose } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addGreen, addRed } from "../actions";

const NewPopup = ({ doOrDont, setNewHabit, displayPopup, setDisplayPopup }) => {
	const [value, setValue] = useState("");
	const items = useSelector(
		(state) => state.habits[doOrDont ? "greens" : "reds"]
	);
	const dispatch = useDispatch();
	const noDuplicateEntry = (hab) => {
		const habitNames = items.map((item) => item.name);
		return !habitNames.includes(hab);
	};
	const handleValueChange = (e) => {
		setValue(e.target.value);
	};
	const createCustomGlow = (e) => {
		e.target.classList.add(`${doOrDont ? "green-glow" : "red-glow"}`);
	};
	const removeCustomGlow = (e) => {
		e.target.classList.remove(`${doOrDont ? "green-glow" : "red-glow"}`);
	};
	const createHabit = () => {
		doOrDont
			? value && noDuplicateEntry(value) && dispatch(addGreen(value))
			: value && noDuplicateEntry(value) && dispatch(addRed(value));
		setValue("");
	};
	return (
		<div
			className="section__overlay"
			style={{
				display: displayPopup ? "flex" : "none",
			}}
		>
			<span className="overlay"></span>
			<div className="form form__login">
				<div
					className="form__header"
					style={{
						backgroundImage: `linear-gradient(135deg, ${
							doOrDont
								? "#386641ff, #6a994eff, #a7c957ff"
								: "#bc4749ff, #ca706bff, #d7988cff"
						})`,
					}}
				>
					{doOrDont ? "Habit to Cultivate" : "Habit to get Rid of"}
				</div>
				<span className="close-button" onClick={() => setDisplayPopup(false)}>
					<FaWindowClose />
				</span>
				<input
					type="text"
					placeholder="Habit Name"
					name="habit"
					className="form__input"
					autoComplete="off"
					value={value}
					onChange={handleValueChange}
					onFocus={createCustomGlow}
					onBlur={removeCustomGlow}
				/>
				<div className="form__buttons">
					<div className="form__buttons--main">
						<button
							type="submit"
							className="btn btn-form btn-form--create"
							onClick={createHabit}
						>
							Create
						</button>
						<button
							type="reset"
							className="btn btn-form btn-form--cancel"
							onClick={() => setValue("")}
						>
							Clear
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewPopup;
