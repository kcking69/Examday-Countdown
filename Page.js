var countDownDate = new Date('Dec 9, 2024 00:00:00').getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('Days').innerHTML = days <= 9 ? '0' + days : days;
  document.getElementById('Hours').innerHTML = hours <= 9 ? '0' + hours : hours;
  document.getElementById('Minutes').innerHTML =
    minutes <= 9 ? '0' + minutes : minutes;
  document.getElementById('Seconds').innerHTML =
    seconds <= 9 ? '0' + seconds : seconds;

  if (distance < 0) {
    clearInterval(x);

    document.getElementById('Days').innerHTML = '00';
    document.getElementById('Hours').innerHTML = '00';
    document.getElementById('Minutes').innerHTML = '00';
    document.getElementById('Seconds').innerHTML = '00';
  }
}, 1000);
