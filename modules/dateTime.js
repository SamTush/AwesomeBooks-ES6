const dateTimefun = () => {
  const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const date = new Date();
  const hrs = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  const realDate = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const week = weekday[date.getDay()];

  if (min < 10) {
    min = `0${min}`;
  }

  if (sec < 10) {
    sec = `0${sec}`;
  }

  document.querySelector('.hours').innerHTML = hrs;
  document.querySelector('.minutes').innerHTML = min;
  document.querySelector('.seconds').innerHTML = sec;
  document.querySelector('.weekDay').innerHTML = week;
  document.querySelector('.date').innerHTML = realDate;
  document.querySelector('.day').innerHTML = month;
  document.querySelector('.year').innerHTML = year;
};

export { dateTimefun };