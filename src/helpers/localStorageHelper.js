const localStorageHelper = {
    // Default time-to-live is 1 day (24 hours in milliseconds)

    setItem: (key, value, ttl = 10 * 1000) => {
        if (!key || value === undefined) {
            console.error("Invalid key or value for localStorage");
            return;
        }
        try {
            const now = new Date();
            const item = {
                value: value,
                expires: now.getTime() + ttl // ttl in milliseconds
            };
            const serializedItem = JSON.stringify(item);
            localStorage.setItem(key, serializedItem);
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
            const serializedItem = localStorage.getItem(key);
            if (!serializedItem) {
                return undefined;
            }
            const item = JSON.parse(serializedItem);
            if (item.expires && new Date().getTime() > item.expires) {
                const resetItem = { value: [], expires: item.expires };
                localStorage.setItem(key, JSON.stringify(resetItem));
                return resetItem.value;
            }
            return item.value;
        } catch (e) {
            console.error("Error reading from localStorage", e);
            return null;
        }
    },
};

export default {
    localStorageHelper
};
