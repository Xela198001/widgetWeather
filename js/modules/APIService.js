const API_URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = `5cc8ffae7c15bcad27222907c3c600db`;
const UNIT = 'metric';

export const fetchWeather = async (city) => {
  try {
    const resp = await fetch(`${API_URL}weather?q=${city}&units=${UNIT}&appid=${API_KEY}&lang=ru`)

    if (!resp.ok) {
      throw new Error('Ошибка запроса')
    }
    const data = await resp.json();

    return {success: true, data}
  } catch (err) {
    return {success: false, err}
  }
}