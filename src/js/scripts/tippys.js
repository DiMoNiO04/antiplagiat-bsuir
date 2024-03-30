/* eslint-disable no-undef */
tippy('.js-notify', {
  content(reference) {
    return reference.getAttribute('data-notify');
  },
  placement: 'bottom',
  animation: 'fade',
});
