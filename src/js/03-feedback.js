import throttle from 'lodash.throttle';

const formUser = document.querySelector('.feedback-form');
const FORM_KEY = 'feedback-form-state';
let formData = {};
const dataValueSave = JSON.parse(localStorage.getItem(FORM_KEY));

const inputData = e => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(FORM_KEY, JSON.stringify(formData));
};

const formSubmit = e => {
  e.preventDefault();
  if (formUser.elements.email.value == '' || formUser.elements.message.value == '') {
    alert('Заполни пустые поля');
    return;
  }
  localStorage.removeItem(FORM_KEY);
  e.currentTarget.reset();
  console.log(dataValueSave);
};

function saveInputData() {
  if (dataValueSave) {
    Object.keys(dataValueSave).forEach(item => (formUser[item].value = dataValueSave[item]));
  }
}

saveInputData();

formUser.addEventListener('input', throttle(inputData, 500));
formUser.addEventListener('submit', formSubmit);
