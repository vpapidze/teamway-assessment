export const getItem = storageKey => {
  try {
    const serializedState = localStorage.getItem(storageKey);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const setItem = (storageKey, data) => {
  try {
    const serialized = JSON.stringify(data);

    localStorage.setItem(storageKey, serialized);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
};

export const removeItem = itemKey => localStorage.removeItem(itemKey);
