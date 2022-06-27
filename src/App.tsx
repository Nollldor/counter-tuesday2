import React, {useEffect, useState} from 'react';
import './App.css';


function App() {
    const localStorageKeys = {
        countValue: "countValue"
    }

    let startValue = 0
    let endValue = 5
    const [countValue, setCountValue] = useState<number>(startValue)

    useEffect(() => {
        const countValueFromLS = localStorage.getItem(localStorageKeys.countValue)
        countValueFromLS && setCountValue(JSON.parse(countValueFromLS))
    }, [])

    useEffect(() => {
        localStorage.setItem(localStorageKeys.countValue, JSON.stringify(countValue))
    }, [countValue])

    const incHandler = () => {
        setCountValue(countValue + 1)
    }

    const resetHandler = () => {
        setCountValue(startValue)
        localStorage.setItem(localStorageKeys.countValue, JSON.stringify(startValue))
    }


    return (
        <div className="App">

            <h1>{countValue}</h1>
            <button disabled={countValue === endValue} onClick={incHandler}>inc</button>
            <button disabled={countValue === startValue} onClick={resetHandler}>reset</button>
        </div>
    );
}

export default App;
