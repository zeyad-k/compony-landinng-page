export const addEnterKeyClickListener = (item) => {
	item.addEventListener("keydown", (event) => {
		if (event.key === "Enter") item.click();
	});
};
