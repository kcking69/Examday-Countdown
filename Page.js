let countDownDate = new Date('Dec 9, 2024 00:00:00').getTime();
const dayEl = document.getElementById('Days');
const hourEl = document.getElementById('Hours');
const minuteEl = document.getElementById('Minutes');
const secondsEl = document.getElementById('Seconds');
const endMessage = document.getElementById('end-message');
const quoteEl = document.getElementById('quote');
const countdownNumber = document.getElementById('countdown-number');
const elements = document.querySelectorAll("#Days, #Hours, #Minutes, #Seconds");


let notified7Days = false;
let notified3Days = false;
let notified1Days = false;

const quotes = [
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The secret of getting ahead is getting started. - Mark Twain",
  "You are capable of amazing things.",
  "Success is no accident. It is hard work, perseverance, and learning. - Pele",
  "Dream big and dare to fail. - Norman Vaughan"
];

let x = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  dayEl.innerHTML = days <= 9 ? '0' + days : days;
  hourEl.innerHTML = hours <= 9 ? '0' + hours : hours;
  minuteEl.innerHTML = minutes <= 9 ? '0' + minutes : minutes;
  secondsEl.innerHTML = seconds <= 9 ? '0' + seconds : seconds;

  if (days > 7) {
    elements.forEach(el => el.className = "green");
  }
  else if (days > 3) {
    elements.forEach(el => el.className = "yellow");
  }
  else {
    elements.forEach(el => el.className = "red");
  }


  if (days === 7 && !notified7Days) {
    showNotification("Exam Reminder", "7 days left until your exam!");
    notified7Days = true;
  }
  if (days === 3 && !notified3Days) {
    showNotification("Exam Reminder", "3 days left until your exam!");
    notified3Days = true;
  }
  if (days === 1 && !notified1Days) {
    showNotification("Exam Reminder", "1 day left untill your exam");
    notified1Days = true;
  }



  if (distance < 0) {
    clearInterval(x);

    dayEl.innerHTML = '00';
    hourEl.innerHTML = '00';
    minuteEl.innerHTML = '00';
    secondsEl.innerHTML = '00';
    endMessage.innerHTML = "Congratulations! Your hard work will pay off. Good luck!";
    quoteEl.style.display = "none";
  }
}, 1000);

function showNotification(title, body) {
  if ("Notification" in window && Notification.permission === "granted") {
    new Notification(title, { body });
  }
}


if ("Notification" in window && Notification.permission !== "granted") {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted!");
    } else {
      console.log("Notification permission denied.");
    }
  });
}

function updateQuote() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteEl.innerHTML = randomQuote;
}

setInterval(updateQuote, 4000)
updateQuote()