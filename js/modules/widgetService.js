import { fetchWeather, getCity } from './APIService.js';
import {
  rednerWidgetForecast,
  rednerWidgetOther,
  rednerWidgetToday,
} from './render.js';

export const startWidget = async (city, widget) => {
  if (!city) {
    const dataCity = await getCity();
    city = dataCity.data;
  }

  if (!widget || widget == undefined) {
    widget = document.createElement('div');
    widget.classList.add('widget');
  }

  const dataWeather = await fetchWeather(city, 'weather');

  if (dataWeather || success) {
    rednerWidgetToday(widget, dataWeather.data);
    rednerWidgetOther(widget, dataWeather.data);
  } else {
    showError();
  }

  const dataWeatherDay = await fetchWeather(city, 'forecast');
  if (dataWeatherDay.success) {
    rednerWidgetForecast(widget, dataWeatherDay.data);
  } else {
    showError(dataWeatherDay.err);
  }

  return widget;
};
