import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";

const refs = {
    form: document.querySelector(".feedback-form"),
    textarea: document.querySelector(".feedback-form textarea"),
};

refs.textarea.addEventListener('input', onInputTextareaSave);
refs.form.addEventListener('submit', throttle(onFormSubmit, 500));

populateInputTextarea();

function onInputTextareaSave(event) {
    const massage = event.carrentTarget.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(massage));
};

function populateInputTextarea() {
    const saveMessage = localStorage.getItem(STORAGE_KEY);
    if (saveMessage) {
       refs.textarea.value= saveMessage;
    };
};

function onFormSubmit(event) {
    event.preventDefault(); 

    const { email, message } = event.currentTarget.elements;
    console.log({ email, message });

    localStorage.removeItem(STORAGE_KEY);
    event.currentTarget.reset();
};
