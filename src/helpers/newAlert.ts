import { DOM_ELEMENTS } from "./domElements";
const { alertContainer } = DOM_ELEMENTS;

export function newAlert(message: string, type: string) {
  const existingAlert = document.getElementById("message-alert");
  if (existingAlert) {
    existingAlert.remove();
  }

  const classAlert = `alert-${type}`;
  const alert = document.createElement("p");
  alert.id = "message-alert";
  alert.classList.add(classAlert);
  alert.innerText = message;
  alertContainer.appendChild(alert);

  setTimeout(() => {
    alert.remove();
  }, 3000);
}
