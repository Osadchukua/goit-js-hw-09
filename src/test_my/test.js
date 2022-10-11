// const button = document.querySelector('button');

// const onClick = () => {
//   setTimeout(() => {
//     alert('I love async JS!');
//   }, 2000);
// };

// // Two seconds after clicking the button,
// // alert specified inside the setTimeout callback will appear.
// button.addEventListener('click', onClick);

// const greet = () => {
//   console.log('Hello!');
// };

// const timerId = setTimeout(greet, 1000);

// clearTimeout(timerId); //виповниться раніше, ніж буде викликана функція

// -----------------------------------

// const startBtn = document.querySelector('.js-start');
// const stopBtn = document.querySelector('.js-stop');
// let timerId = null;

// startBtn.addEventListener('click', () => {
//   timerId = setInterval(() => {
//     console.log(`I love async JS!  ${Math.random()}`);
//   }, 1000);
// });

// stopBtn.addEventListener('click', () => {
//   clearInterval(timerId);
//   console.log(`Interval with id ${timerId} has stopped!`);
// });

// console.log(new Date(0));

// -----------------------------------------------

// const logMessage = () => {
//   console.log('лог при виклику callback функції через 3 секунди');
// }

// -----------------------------------------------

// console.log('До виклику setTimeout');

// setTimeout(() => {
//   console.log('2Всередині callback для setTimeout');
// }, 2000)

// setTimeout(() => {
//   console.log('1Всередині callback для setTimeout');
// }, 1000);

// console.log('Після виклику setTimeout');

// -------------------------setTimeout-------------------------------

// const logger = time => {
//   console.log(`Лог через ${time}ms, тому що не відмінили таймаут`);
// }

// const timerID = setTimeout(logger, 2000, 2000)

// console.log(timerID);

// const shouldCancelTimer = Math.random() > 0.3;
// console.log(shouldCancelTimer);

// if (shouldCancelTimer) {
//   clearTimeout(timerID);
// }

// -------------------------setInterval-------------------------------

// const logger = time => console.log(`Лог через ${time}ms - ${Date.now()}`);

// console.log('До виклику setInterval');

// setInterval(logger, 2000, 2000)

// console.log('Після виклику setInterval');

// -------------------------clearInterval-------------------------------

// const logger = time => console.log(`Лог через ${time}ms - ${Date.now()}`);
// const intervalId = setInterval(logger, 2000, 2000);
// const shouldCancelnterval = Math.random() > 0.3;
// console.log(shouldCancelnterval);

// if (shouldCancelnterval) {
//   clearInterval(intervalId);
// }

// --------------------------------------------------------

// const NOTIFICATION_DELAY = 3000;
// let timeoutId = null;
// const refs = {
//   notification: document.querySelector('.js-alert'),
// };

// refs.notification.addEventListener(
//   'click',
//   onNotificationClick
// );

// showNotification();

// function onNotificationClick() {
//     hideNotification();
//     clearTimeout(timeoutId);
// }

// function showNotification() {
//   refs.notification.classList.add('js-visible'); // js-visible - треба прописати в css

//   timeoutId = setTimeout(() => {
//     console.log('закриваємо алерт автоматично');
//     hideNotification();
//   }, NOTIFICATION_DELAY);
// }

// function hideNotification() {
//   refs.notification.classList.remove('js-visible');
// }

// -----------------------надоїдалка---------------------------------

// const PROMPT_DELAY = 1000;
// const MAX_PROMPT_ATTEMPTS = 3;

// let promptCounter = 0;
// let hasSubscribed = false;

// const intervalId = setInterval(() => {
//   if (
//     promptCounter === MAX_PROMPT_ATTEMPTS ||
//     hasSubscribed
//   ) {
//     console.log('потрібно зупинити інтервал');
//     clearInterval(intervalId);
//     return;
//   }
//   console.log('Підпишися на розсилку! - ' + Date.now());
//   promptCounter += 1;
// }, PROMPT_DELAY);
