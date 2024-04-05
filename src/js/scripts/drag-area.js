/* eslint-disable func-names */
const dragArea = document.querySelector('.drag-area');
const button = dragArea.querySelector('button');
const input = dragArea.querySelector('input');

function clickBtn() {
  button.addEventListener('click', () => input.click());
}

function handleDragOver() {
  dragArea.addEventListener('dragover', function (event) {
    event.preventDefault();
    this.classList.add('--active');
  });
}

function handleDragLeave() {
  dragArea.addEventListener('dragleave', function () {
    this.classList.remove('--active');
  });
}

function handleDrop() {
  dragArea.addEventListener('drop', function (event) {
    event.preventDefault();
    this.classList.remove('--active');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  clickBtn();
  handleDragOver();
  handleDragLeave();
  handleDrop();
});
