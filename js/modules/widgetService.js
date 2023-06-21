import { rednerWidgetForecast, rednerWidgetOther, rednerWidgetToday } from './render.js';

export const startWidget = () => {
  const widget = document.createElement('div')
  widget.classList.add('widget');

  rednerWidgetToday(widget)
  rednerWidgetOther(widget)
  rednerWidgetForecast(widget)

  return widget;
};