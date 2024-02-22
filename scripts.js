import { addEnterKeyClickListener, observeElements } from "./utils";

const questionsLabels = document.querySelectorAll(".faq__questions");
const sectionsElements = document.querySelectorAll(".section");

questionsLabels.forEach(addEnterKeyClickListener);
observeElements(sectionsElements);


