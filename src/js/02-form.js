const form = document.querySelector('.feedback-form');

form.addEventListener('input', () => {
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  const data = {
    email,
    message,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
});

if (localStorage.getItem('feedback-form-state')) {
  const dataFromLS = JSON.parse(localStorage.getItem('feedback-form-state'));
  form.elements.email.value = dataFromLS.email;
  form.elements.message.value = dataFromLS.message;
}
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.elements.email.value || !form.elements.message.value) {
    alert('Please fill in all the fields!');
  } else {
    const storedData = JSON.parse(localStorage.getItem('feedback-form-state'));
    console.log(storedData);
    localStorage.removeItem('feedback-form-state');
    form.reset();
  }
});
