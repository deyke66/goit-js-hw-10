
import Notiflix from 'notiflix';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay)
  });
}


const refs = {
  promisesForm: document.querySelector('.form'),
  inputDelay: document.querySelector('input[name="delay"]'),
  inputStep: document.querySelector('input[name="step"]'),
  inputAmount: document.querySelector('input[name="amount"]'),
  startBtn: document.querySelector('button')

}

const { promisesForm, inputAmount, inputDelay, inputStep, startBtn } = refs;

promisesForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const quantityPromises = inputAmount.value;
  let delayValue = Number(inputDelay.value);

  for (let i = 1; i <= quantityPromises; i++) {
    createPromise(i, delayValue).then(value => Notiflix.Notify.success(value)).catch(err => Notiflix.Notify.failure(err));
    delayValue += Number(inputStep.value);
    startBtn.disabled = true;
    }
  promisesForm.reset()
  setTimeout(() => {
    startBtn.disabled = false;
  }, delayValue);

}


