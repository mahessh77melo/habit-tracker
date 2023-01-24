export const initialState = {
	habits: {
		greens: [
			{
				id: 1,
				name: "Hit the gym",
				done: false,
			},
			{
				id: 2,
				name: "Read 10 pages",
				done: false,
			},
		],
		reds: [
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
		],
	},
};
