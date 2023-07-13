import React, { useEffect, useState } from "react";

type ValueSetter<T> = React.Dispatch<React.SetStateAction<T>>;

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, ValueSetter<T>] {
  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? (JSON.parse(storedValue) as T) : initialValue;
  });
  useEffect(() => {
    const handleStorageUpdate = (e: StorageEvent) => {
      if (e.key === key) {
        setValue(e.newValue ? (JSON.parse(e.newValue) as T) : initialValue);
      }
    };
    window.addEventListener("storage", handleStorageUpdate);
    return () => {
      window.removeEventListener("storage", handleStorageUpdate);
    };
  }, [key, initialValue]);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}
