export async function displayInfo(weatherData) {
  const temp = document.querySelector(".temp");
  const time = document.querySelector(".time");
  const country = document.querySelector(".country");
  const humidity = document.querySelector(".humidity");
  const city = document.querySelector(".city");

  temp.textContent = (await weatherData.current.feelslike_c) + "°C";

  temp.innerHTML += `<img src="images/cloudy_1163661.png" width="80" height="80">`
  country.textContent = await weatherData.location.country;
  city.textContent = await weatherData.location.name;

  humidity.textContent = "humididty " + await weatherData.current.humidity;
  time.textContent = await weatherData.location.localtime;
}
