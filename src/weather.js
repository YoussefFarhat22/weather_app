export async function getWeather(location) {
  const url = `https://api.weatherapi.com/v1/current.json?key=2e7f9704618e4a8ca33154215241304&q=${location}`;
  const response = await fetch(url);
  const dataJson = await response.json();
  return dataJson
}


