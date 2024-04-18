import { displayInfo } from "./view";
import { getWeather } from "./weather";

const form = document.querySelector("form");

const input = document.querySelector("#search");

export async function getData() {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = await getWeather(input.value);
    await displayInfo(data);
    input.value = ''
  });
}
