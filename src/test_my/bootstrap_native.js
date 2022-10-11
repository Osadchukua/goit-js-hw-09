// https://youtu.be/jMNproAL94I 1:25:00 end
import BSN from 'bootstrap.native';

const modal = new BSN.Modal('#myModal');
const PROMPT_DELAY = 1000;
const MAX_PROMPT_ATTEMPTS = 3;
let promptCounter = 0;
let hasSubscribed = false;

const refs = {
  modal: document.querySelector('#myModal'),
  subscribeBtn: document.querySelector('.btn-primary'),
};

openModal();

refs.modal.addEventListener('hide.bs.modal', openModal);
refs.subscribeBtn.addEventListener('click', onSubscribeBtnClick);

function openModal() {
  if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
    console.log('максимальна кількість спроб або підписався');
    return;
  }

  setTimeout(() => {
    console.log('відкриваємо модалку');
    modal.show();
    promptCounter += 1;
  }, PROMPT_DELAY);
}

function onSubscribeBtnClick() {
  hasSubscribed = true;
  modal.hide(); //https://thednp.github.io/bootstrap.native/#item-1-1:~:text=backdrop%20in%20place.-,instance.hide(),-This%20hides%20an
}




// 1:58:30 - Date.naw()