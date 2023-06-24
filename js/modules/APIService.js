const API_URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = `5cc8ffae7c15bcad27222907c3c600db`;
const UNIT = 'metric';

export const fetchWeather = async (city, type) => {
  try {
    const resp = await fetch(
      `${API_URL}${type}?q=${city}&units=${UNIT}&appid=${API_KEY}&lang=ru`
    );

    if (!resp.ok) {
      throw new Error('Ошибка запроса');
    }
    const data = await resp.json();

    return { success: true, data };
  } catch (err) {
    return { success: false, err };
  }
};

export const getCity = async () => {
  const url = 'https://ipapi.co/city/';
  try {
    const resp = await fetch(url);

    if (!resp.ok) {
      throw new Error('Ошибка запроса');
    }
    const data = await resp.text();

    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
};
