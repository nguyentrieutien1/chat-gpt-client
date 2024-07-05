
const localStorageHelper = {
  setItem: (key, value) => {
      if (!key || value === undefined) {
          console.error("Invalid key or value for localStorage");
          return;
      }
      try {
          const serializedValue = JSON.stringify(value);
          localStorage.setItem(key, serializedValue);
      } catch (e) {
          console.error("Error saving to localStorage", e);
      }
  },

  getItem: (key) => {
      if (!key) {
          console.error("Invalid key for localStorage");
          return null;
      }
      try {
          const serializedValue = localStorage.getItem(key);
          return serializedValue ? JSON.parse(serializedValue) : [];
      } catch (e) {
          console.error("Error reading from localStorage", e);
          return null;
      }
  },

  removeItem: (key) => {
      if (!key) {
          console.error("Invalid key for localStorage");
          return;
      }
      try {
          localStorage.removeItem(key);
      } catch (e) {
          console.error("Error removing from localStorage", e);
      }
  },

  clear: () => {
      try {
          localStorage.clear();
      } catch (e) {
          console.error("Error clearing localStorage", e);
      }
  }
};

export default {
  localStorageHelper
};
