import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const dateTimePicker = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');
const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');

let userSelectedDate;
startButton.disabled = true;
let countdownInterval;

flatpickr(dateTimePicker, {
  enableTime: true,
  dateFormat: 'Y-m-d H:i',
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  enableSeconds: false,

  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    const currentDate = new Date();
    if (userSelectedDate > currentDate) {
      startButton.disabled = false;
    } else {
      startButton.disabled = true;
      window.alert('Please choose a date in the future');
    }
  },
});

startButton.addEventListener('click', function () {
  if (!startButton.disabled) {
    startTimer();
    startButton.disabled = true;
    dateTimePicker.disabled = true;
  }
});
function startTimer() {
  countdownInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  const currentDate = new Date();
  const difference = userSelectedDate - currentDate;

  if (difference <= 0) {
    clearInterval(countdownInterval);
    return;
  }
  const { days, hours, minutes, seconds } = convertMs(difference);
  daysElement.textContent = addLeadingZero(days);
  hoursElement.textContent = addLeadingZero(hours);
  minutesElement.textContent = addLeadingZero(minutes);
  secondsElement.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
function convertMs(difference) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(difference / day);
  // Remaining hours
  const hours = Math.floor((difference % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((difference % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((difference % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
