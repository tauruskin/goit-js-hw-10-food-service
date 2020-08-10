import { save } from './storage-theme.js';
import refs from './refs.js';
import { Theme } from './theme.js';
import { key, themeCheck } from './theme-check.js';

refs.switch.addEventListener('change', changeTheme);
themeCheck();

function changeTheme(event) {
  switch (event.target.checked) {
    case true:
      refs.body.classList.remove(Theme.LIGHT);
      refs.body.classList.add(Theme.DARK);
      save(key, event.target.checked);
      break;

    case false:
      refs.body.classList.remove(Theme.DARK);
      refs.body.classList.add(Theme.LIGHT);
      save(key, event.target.checked);
      break;
  }
}
