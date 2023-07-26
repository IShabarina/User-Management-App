import { useEffect, useState } from "react";

export const useLocalStorageState = (key, defaultValue) => {
    const [value, setValue] = useState(()=> {
        const storedValue = JSON.parse(localStorage.getItem(key) || 'null');
        return storedValue !== null ? storedValue : defaultValue;
    });

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}