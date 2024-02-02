import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const delayInput = form.elements['delay'];
const stateInputs = form.elements['state'];
const submitButton = form.querySelector('button[type="submit"]');

form.addEventListener('submit', event => {
  event.preventDefault();
  const delay = parseInt(delayInput.value);
  const selectedState = [...stateInputs].find(input => input.checked);
  const stateValue = selectedState ? selectedState.value : null;
  if (!delay || !stateValue) {
    return;
  }
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (stateValue === 'fulfilled') {
        resolve(delay);
      } else if (stateValue === 'rejected') {
        reject(delay);
      }
    }, delay);
  });
  promise
    .then(delay => {
      iziToast.show({
        title: '✅',
        message: `Fulfilled promise in ${delay}ms`,
        position: 'topCenter',
        backgroundColor: '#59A10D',
        messageColor: '#fff',
      });
      form.reset();
    })
    .catch(delay => {
      iziToast.show({
        title: 'Error',
        titleColor: '#fff',
        message: `Rejected promise in ${delay}ms`,
        position: 'topCenter',
        backgroundColor: '#EF4040',
        messageColor: '#fff',
      });
      form.reset();
    });
});
