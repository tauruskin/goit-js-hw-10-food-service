import { load } from './storage-theme.js';
import refs from './refs.js';
import { Theme } from './theme.js';

const key = 'Theme';

const themeCheck = () => {
  const themeInStorage = load(key);
  if (themeInStorage) {
    refs.body.classList.remove(Theme.LIGHT);
    refs.body.classList.add(Theme.DARK);
    refs.switch.checked = true;
  } else {
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(Theme.LIGHT);
    refs.switch.checked = false;
  }
};
export { key, themeCheck };
