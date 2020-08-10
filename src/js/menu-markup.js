import menu from '../menu.json';
import itemMenu from '../templates/item.hbs';
import refs from './refs.js';

const menuRefHTML = menu
  .map(item => itemMenu(item))
  .join('')
  .trim();
refs.menu.insertAdjacentHTML('afterbegin', menuRefHTML);
