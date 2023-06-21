import { fetchWeather } from './APIService.js';
import { rednerWidgetForecast, rednerWidgetOther, rednerWidgetToday } from './render.js';

export const startWidget = async () => {
  const widget = document.createElement('div')
  widget.classList.add('widget');

  const dataWeather = await fetchWeather('Murino');

  if (dataWeather || success) {
  rednerWidgetToday(widget, dataWeather.data)
  rednerWidgetOther(widget, dataWeather.data)
  } else {
    showError()
  }

  rednerWidgetForecast(widget)

  return widget;
};