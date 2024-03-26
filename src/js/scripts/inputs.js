const changeVisiblePassword = () => {
  const passInputs = document.querySelectorAll('.input--pass');

  passInputs.forEach((passInput) => {
    const input = passInput.querySelector('input');
    const btnPass = passInput.querySelector('.input__btn');

    btnPass.addEventListener('mousedown', (event) => {
      event.preventDefault();
      btnPass.classList.toggle('--open');
      if (input.getAttribute('type') === 'text') {
        input.setAttribute('type', 'password');
      } else {
        input.setAttribute('type', 'text');
      }
      input.focus();
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  changeVisiblePassword();
});
