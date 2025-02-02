const cache = {};

export const getFromCache = (key) => {
  return cache[key];
};

export const setToCache = (key, value) => {
  cache[key] = value;
};
