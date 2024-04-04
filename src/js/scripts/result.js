const mores = document.querySelectorAll('.cab-results__more');

function handleMore() {
  if (mores) {
    mores.forEach((more) => {
      const moreBtn = more.querySelector('.cab-results__more-btn');
      const moreContent = more.querySelector('.cab-results__more-content');

      moreBtn.addEventListener('click', () => {
        moreContent.classList.toggle('--active');
      });
    });
  }
}

document.addEventListener('click', (event) => {
  if (mores) {
    mores.forEach((more) => {
      const moreContent = more.querySelector('.cab-results__more-content');
      const isClickInsideMore = more.contains(event.target);

      if (!isClickInsideMore) {
        moreContent.classList.remove('--active');
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  handleMore();
});
