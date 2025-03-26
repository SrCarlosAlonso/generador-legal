import { newAlert } from "@helpers/newAlert";

export async function copyText(e: Event){
  const target = e.target as HTMLElement;
  if (!target) return console.error("Target is null");

  const parentElement = target.parentElement;
  if (!parentElement) return console.error("Parent element is null");

  const containerID = parentElement.id.replace("btn", "txt");
  const container = document.getElementById(containerID);

  if (!container) return console.error("Container is null");

  const text = container.innerHTML;

  if (text.length < 100) return newAlert("You need first fill the form", "error");

  try {
    await navigator.clipboard.writeText(text);
    console.log("Text copied to clipboard");
  } catch (error) {
    console.error("Failed to copy text:", error);
  }
}
