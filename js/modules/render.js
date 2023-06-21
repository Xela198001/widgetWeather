import { getCurrentDateTime } from './utils.js'

export const rednerWidgetToday = async (widget, data) => {
  const {day, month, dayOfMonth, dayOfWeek, year, hours, minutes} = getCurrentDateTime(); 
console.log(data)
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
  const num = data.main.pressure * 0.750063755419211;
  widget.insertAdjacentHTML('beforeend', `
   <div class="widget__other">
      <div class="widget__wind">
        <p class="widget__wind-title">Ветер</p>
        <p class="widget__wind-speed">${data.wind.speed} м/с</p>
        <p class="widget__wind-text"><span style="display: inline-block;transform: rotate(${data.wind.deg}deg);">&#8599;</span></p>

      </div>
      <div class="widget__humidity">
        <p class="widget__humidity-title">Влажность</p>
        <p class="widget__humidity-value">${data.main.humidity
}%</p>
        <p class="widget__humidity-text">Т.Р: -0.2 °C</p>
      </div>
      <div class="widget__pressure">
        <p class="widget__pressure-title">Давление</p>
        <p class="widget__pressure-value">${num.toFixed(2)}</p>
        <p class="widget__pressure-text">мм рт.ст.</p>
      </div>
    </div>`)
 }
export const rednerWidgetForecast = (widget) => {

   widget.insertAdjacentHTML('beforeend', `
   <ul class="widget__forecast">
      <li class="widget__day-item">
        <p class="widget__day-text">ср</p>
        <img class="widget__day-img" src="./img/icon/02d.svg" alt="Погода">
        <p class="widget__day-temp">18.4°/13.7°</p>
      </li>
      <li class="widget__day-item">
        <p class="widget__day-text">чт</p>
        <img class="widget__day-img" src="./img/icon/03d.svg" alt="Погода">
        <p class="widget__day-temp">17.3°/11.3°</p>
      </li>
      <li class="widget__day-item">
        <p class="widget__day-text">пт</p>
        <img class="widget__day-img" src="./img/icon/04d.svg" alt="Погода">
        <p class="widget__day-temp">16.5°/10.9°</p>
      </li>
      <li class="widget__day-item">
        <p class="widget__day-text">сб</p>
        <img class="widget__day-img" src="./img/icon/01d.svg" alt="Погода">
        <p class="widget__day-temp">18.6°/12.5°</p>
      </li>
      <li class="widget__day-item">
        <p class="widget__day-text">вс</p>
        <img class="widget__day-img" src="./img/icon/03d.svg" alt="Погода">
        <p class="widget__day-temp">17.3°/11.2°</p>
      </li>
    </ul>`)
}
 
export const showError = (widget,error) => {
  widget.testContent = error.toString()
  widget.classList.add('widget_error');
}