/* eslint-disable no-undef */
tippy('.js-notify', {
  content(reference) {
    return reference.getAttribute('data-notify');
  },
  placement: 'bottom',
  animation: 'fade',
  maxWidth: '200px',
});

document.addEventListener('DOMContentLoaded', () => {
  const files = document.querySelectorAll('.js-notify-tippy');

  if (files && window.innerWidth > 1100) {
    files.forEach((docDownloadLink) => {
      docDownloadLink.addEventListener('mouseover', (event) => {
        const text = event.currentTarget;
        const txt = text.textContent;
        const txtHeight = text.scrollHeight;
        const height = 24;

        if (txt.split('\n').length >= 2 && txtHeight > height) {
          tippy(docDownloadLink, {
            content: txt,
            placement: 'bottom',
            arrow: true,
            theme: 'light',
            maxWidth: '400px',
            followCursor: true,
          });
        }
      });
    });
  }
});
