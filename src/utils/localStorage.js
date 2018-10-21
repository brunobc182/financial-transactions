const setItem = (name, item) => localStorage.setItem(name, JSON.stringify(item));
const getItem = name => JSON.parse(localStorage.getItem(name));

export { setItem, getItem };
