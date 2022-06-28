import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';


function App() {
    const localStorageKeys = {
        countValue: "countValue"
    }

    let [startValue, setStartValue] = useState<number>(0)
    let [endValue, setEndValue] = useState<number>(10)

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

    const onChangeHandler1 = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(JSON.parse(e.currentTarget.value))
        /*console.log(e)*/
    }

    const onChangeHandler2 = (e: ChangeEvent<HTMLInputElement>) => {
        setEndValue(JSON.parse(e.currentTarget.value))
        /*console.log(e)*/
    }

    const setHandler = () => {

    }
    return (
        <div className="App">

            <div>
                <input type={"number"} value={startValue} onChange={onChangeHandler1}/>
                <input type={"number"} value={endValue} onChange={onChangeHandler2}/>
                <button onClick={setHandler}>set</button>
            </div>
            <div className="">
                <h1>{countValue}</h1>
                <button disabled={countValue === endValue} onClick={incHandler}>inc</button>
                <button disabled={countValue === startValue} onClick={resetHandler}>reset</button>
            </div>

        </div>
    );
}

export default App;
