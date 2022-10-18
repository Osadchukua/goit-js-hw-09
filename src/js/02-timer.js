import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const selectedDates = document.querySelector('input#datetime-picker');
const startCounterBtn = document.querySelector('[data-start]');
startCounterBtn.disabled = true;
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

let ms;
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    let currentDate = new Date();

    if (selectedDates[0] < currentDate) {
      startCounterBtn.disabled = true;

      clearInterval(timerId);
      days.textContent = '00';
      hours.textContent = '00';
      minutes.textContent = '00';
      seconds.textContent = '00';

      setTimeout(() => {
        document.location.reload();
      }, 4000);

      return;
    }

    startCounterBtn.disabled = false;

    startCounterBtn.addEventListener('click', onClick);
  },
};

const dataPickr = new flatpickr(selectedDates, options);

function onClick() {
  timerId = setInterval(() => {
    let currentDate = new Date();

    ms = dataPickr.selectedDates[0] - currentDate;

    const timeForCounter = convertMs(ms);

    days.textContent = addLeadingZero(timeForCounter.days, 0);
    hours.textContent = addLeadingZero(timeForCounter.hours, 0);
    minutes.textContent = addLeadingZero(timeForCounter.minutes, 0);
    seconds.textContent = addLeadingZero(timeForCounter.seconds, 0);

    startCounterBtn.disabled = true;

    if (
      timeForCounter.days === 0 &&
      timeForCounter.hours === 0 &&
      timeForCounter.minutes === 0 &&
      timeForCounter.seconds === 0
    ) {
      clearInterval(timerId);

      setTimeout(() => {
        document.location.reload();
      }, 10000);
    }
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value, addingSymbols) {
  return value.toString().padStart(2, addingSymbols);
}
