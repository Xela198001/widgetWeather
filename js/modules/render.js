import { calculateDewPoint, convertPressure, getCurrentDateTime, getWeatherForecastData } from './utils.js'

export const rednerWidgetToday = async (widget, data) => {
  const {day, month, dayOfMonth, dayOfWeek, year, hours, minutes} = getCurrentDateTime(); 

  widget.insertAdjacentHTML('beforeend', `
   <div class="widget__today">
      <div class="widget__date-block">
        <p class="widget__date">${day} ${month} ${year}</p>
        <p class="widget__time">${hours}:${minutes}</p>
        <p class="widget__day">${dayOfWeek}</p>
      </div>
      <div class="widget__icon">
        <img class="widget__img" src="./img/icon/${data.weather[0].icon}.svg" alt="Погода">
      </div>
      <div class="widget__wheather">
        <div class="widget__city">
          <p>${data.name}</p>
          <button class="widget__change-city" aria-label="Изменить город"></button>
        </div>
        <p class="widget__temp-big">${data.main.temp}°C</p>
        <p class="widget__felt">ощущается</p>
        <p class="widget__temp-small">${data.main.feels_like}°C</p>
      </div>
    </div>`)
  
 }
export const rednerWidgetOther = (widget, data) => {
  const { main: { pressure, humidity, temp }, wind: { deg, speed } } = data;
  
  widget.insertAdjacentHTML('beforeend', `
   <div class="widget__other">
      <div class="widget__wind">
        <p class="widget__wind-title">Ветер</p>
        <p class="widget__wind-speed">${speed} м/с</p>
        <p class="widget__wind-text"><span style="display: inline-block;transform: rotate(${deg * -1}deg);">&#8599;</span></p>

      </div>
      <div class="widget__humidity">
        <p class="widget__humidity-title">Влажность</p>
        <p class="widget__humidity-value">${humidity
}%</p>
        <p class="widget__humidity-text">Т.Р: ${calculateDewPoint(temp,humidity)} °C</p>
      </div>
      <div class="widget__pressure">
        <p class="widget__pressure-title">Давление</p>
        <p class="widget__pressure-value">${convertPressure(pressure)}</p>
        <p class="widget__pressure-text">мм рт.ст.</p>
      </div>
    </div>`)
 }
export const rednerWidgetForecast = async (widget, data) => {  
  const widgetForecast = document.createElement('ul');
  widgetForecast.className = 'widget__forecast';

  const forecastData = await getWeatherForecastData(data);

  const items = forecastData.map((item) => {
    const widgetDayItem = document.createElement('li');
    widgetDayItem.className = 'widget__day-item';

    widgetDayItem.insertAdjacentHTML('beforeend', `
        <p class="widget__day-text">${item.dayOfWeek}</p>
        <img class="widget__day-img" src="./img/icon/${item.weatherIcon}.svg" alt="Погода">
        <p class="widget__day-temp">${item.minTemp.toFixed(1)}°/${item.maxTemp.toFixed(1)}°</p>
    `);

    return widgetDayItem;
  })

  widgetForecast.append(...items);
  widget.append(widgetForecast);
}
 
export const showError = (widget,error) => {
  widget.testContent = error.toString()
  widget.classList.add('widget_error');
}