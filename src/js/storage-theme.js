const save = (key, value) => {
  try {
    const theme = JSON.stringify(value);
    localStorage.setItem(key, theme);
  } catch (err) {
    console.log('Set error:', err);
  }
};
const load = key => {
  try {
    const theme = localStorage.getItem(key);
    return theme === null ? undefined : JSON.parse(theme);
  } catch (err) {
    console.log('Load error:', err);
  }
};

export { save, load };
