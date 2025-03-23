import { DOM_ELEMENTS } from "./domElements";
const { alertContainer } = DOM_ELEMENTS;

export function newAlert(message: string, type: string) {
const classAlert = `alert-${type}`;
const alert = document.createElement("p");
alert.id = "message-alert";
alert.classList.add(classAlert);
alert.innerText = message;
alertContainer.appendChild(alert);
};


