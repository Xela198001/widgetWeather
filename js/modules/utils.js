const zero = (n) => n < 10 ? `0${n}` : n;

export const getCurrentDateTime = () => {
  const months = [
  'янв','фев','мар','апр','май','июн','июл','фвг','сен','окт','ноя','дек'
  ]
  const weekdays = [
    'воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
  
  const date = new Date();
  const day= date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const dayOfWeek = weekdays[date.getDay()];

  let hours = date.getHours();
  let minutes = date.getMinutes();

  hours = zero(hours);
  minutes = zero(minutes);

  return {day, month, dayOfWeek, year, hours, minutes}

};