 
 const questionsLabels = document.querySelectorAll(".faq__questions");

const onClickHandler = (item) => {
  item.addEventListener("keydown", (event) => {
    if (event.key === "Enter") item.click();
  });
};
questionsLabels.forEach(onClickHandler)
 

 