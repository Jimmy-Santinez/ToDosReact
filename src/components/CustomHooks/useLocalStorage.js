import { useState, useEffect } from 'react';

/** Custom Hooks */
function useLocalStorage(itemName, initialValue){
    const [ item, setItem ] = useState(initialValue);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);

    
    useEffect(() => {
        setTimeout(() => {
            let parsedItem;

            try {
                if(!localStorage.getItem(itemName)){
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else{
                    parsedItem = JSON.parse(localStorage.getItem(itemName));
                    setItem(parsedItem);
                }
        
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }, 2000);
    }, []);
    

    const saveItem = (newItem) => {
        setItem(newItem);
        localStorage.setItem(itemName, JSON.stringify(newItem));
    };

    return { item, saveItem, loading, error };
}

export { useLocalStorage }