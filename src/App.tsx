import React, {useEffect, useState} from 'react';
import './App.css';
import {Settings} from "./Components/Settings/Settings";
import {Counter} from "./Components/Counter/Counter";
import {HashRouter, Navigate, Route, Routes} from "react-router-dom";

type PathType = {
    [key: string]: string
}
export const Path: PathType = {
    counter: '/counter',
    settings: '/settings'
}

function App() {
    const localStorageKeys = {
        countValue: "countValue",
        startValue: "startValue",
        endValue: "endValue",
    }

    const [startValue, setStartValue] = useState<number>(0)
    const [endValue, setEndValue] = useState<number>(10)
    const [waitSettings, setWaitSettings] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const [countValue, setCountValue] = useState<number>(startValue)

    const constructError = (start: number, end: number) => {
        setError(null)

        if (start < 0 && end <= start) {
            setError("wrong start, wrong max")
        } else if (end <= start) {
            setError("wrong max")
        } else if (start < 0) {
            setError("wrong start")
        }
    }

    useEffect(() => {
        const countValueFromLS = localStorage.getItem(localStorageKeys.countValue)
        if (countValueFromLS) {
            setCountValue(JSON.parse(countValueFromLS))
        }

        const startValueFromLS = localStorage.getItem(localStorageKeys.startValue)
        if (startValueFromLS) {
            setStartValue(JSON.parse(startValueFromLS))
        }

        const endValueFromLS = localStorage.getItem(localStorageKeys.endValue)
        if (endValueFromLS) {
            setEndValue(JSON.parse(endValueFromLS))
        }


        if (startValueFromLS && endValueFromLS) constructError(JSON.parse(startValueFromLS), JSON.parse(endValueFromLS))

    }, [])

    useEffect(() => {
        localStorage.setItem(localStorageKeys.countValue, JSON.stringify(countValue))
        localStorage.setItem(localStorageKeys.startValue, JSON.stringify(startValue))
        localStorage.setItem(localStorageKeys.endValue, JSON.stringify(endValue))
    }, [countValue, startValue, endValue])


    const incCount = () => {
        setCountValue(countValue + 1)
    }

    const resetCount = () => {
        setCountValue(startValue)
    }

    const setStartEnd = () => {
        setStartValue(startValue)
        setEndValue(endValue)
        setCountValue(startValue)
    }

    return (
        <div className="App">
            <HashRouter>
                <Routes>
                    <Route path={'/'} element={<Navigate to={Path.settings}/>}/>

                    <Route path={Path.counter} element={
                        <Counter
                            start={startValue}
                            end={endValue}
                            count={countValue}
                            inc={incCount}
                            reset={resetCount}
                            waitSettings={waitSettings}
                            error={error}
                        />
                    }/>

                    <Route path={Path.settings} element={
                        <Settings
                            start={startValue}
                            end={endValue}
                            changeStart={setStartValue}
                            changeEnd={setEndValue}
                            setWaitSettings={setWaitSettings}
                            set={setStartEnd}
                            setError={setError}
                            error={error}
                            constructError={constructError}
                        />
                    }/>
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
