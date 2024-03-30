const changeVisiblePassword = () => {
  const passInputs = document.querySelectorAll('.input--pass');

  if (passInputs) {
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
  }
};

const changeInputWithError = () => {
  const inputErrors = document.querySelectorAll('.input.--error');

  if (inputErrors) {
    inputErrors.forEach((inputError) => {
      inputError.addEventListener('input', function () {
        this.classList.remove('--error');
      });
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  changeVisiblePassword();
  changeInputWithError();
});
