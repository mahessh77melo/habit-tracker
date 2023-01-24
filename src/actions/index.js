export const addGreen = (newHabit) => ({ type: "ADDGREEN", payload: newHabit });
export const addRed = (newHabit) => ({ type: "ADDRED", payload: newHabit });
export const changeGreenDone = (id, done) => ({
	type: "CHANGEGREENDONE",
	payload: { id, done },
});
export const changeRedDone = (id, done) => ({
	type: "CHANGEREDDONE",
	payload: { id, done },
});
export const deleteGreen = (id) => ({
	type: "DELETEGREEN",
	payload: id,
});
export const deleteRed = (id) => ({
	type: "DELETERED",
	payload: id,
});
