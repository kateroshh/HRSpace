import { useEffect, useState } from "react";

function isDefined(storedValue) {
  return storedValue !== null && storedValue !== "undefined";
}

export function useLocalStorageState(key, initialValue) {
  const [state, setState] = useState(() => {
    const storedValue = window.localStorage.getItem(key);

    return isDefined(storedValue) ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
