const toggleMenu = () => {
  const menu = document.querySelector('.js-menu');
  const btn = document.querySelector('.js-menu-btn');
  const menus = document.querySelector('.js-menus');

  if (menu && btn) {
    btn.addEventListener('mouseover', () => {
      menu.classList.add('--active');
      btn.classList.add('--active');
    });
    menus.addEventListener('mouseleave', () => {
      menu.classList.remove('--active');
      btn.classList.remove('--active');
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  toggleMenu();
});
