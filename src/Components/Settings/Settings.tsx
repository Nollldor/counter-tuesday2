import React, {FC, useEffect, useState} from "react";
import {InputNumber} from "../InputNumber/InputNumber";
import {Button} from "../Button/Button";
import styles from './Settings.module.css'
import {NavLink} from "react-router-dom";
import {Path} from "../../App";

type SettingsPropsType = {
    start: number
    end: number
    changeStart: (value: number) => void
    changeEnd: (value: number) => void
    set: () => void
    setError: (error: string | null) => void
    error: string | null
    constructError: (start: number, end: number) => void
}

export const Settings: FC<SettingsPropsType> = ({
                                                    start,
                                                    end,
                                                    set,
                                                    changeStart,
                                                    changeEnd,
                                                    setError,
                                                    error,
                                                    constructError,
                                                    ...props
                                                }) => {
    console.log(error)
    const [disableSetButton, setDisableSetButton] = useState(error!==null? true : false)

    const onChangeStart = (value: string) => {
        changeStart(+value)
        constructError(+value, end)
        setDisableSetButton(+value < 0 || +value >= end)


    }

    const onChangeEnd = (value: string) => {
        changeEnd(+value)
        constructError(start, +value)
        setDisableSetButton(+value <= start)

    }

    const setHandler = () => {
        set()
        setDisableSetButton(true)
    }


    return (
        <div className={styles.settings}>
            <div className={styles.inputsBlock}>
                <div className={styles.inputsTitles}>
                    <span>start value:</span>
                    <span>max value:</span>
                </div>
                <div className={styles.inputs}>
                    <InputNumber value={start} onChange={onChangeStart} error={error?.includes("wrong start")}/>
                    <InputNumber value={end} onChange={onChangeEnd} error={error?.includes("wrong max")}/>
                </div>
            </div>
            <div className={styles.buttons}>
                <NavLink to={Path.counter}>
                    <Button title={"set"} disabled={disableSetButton} onClick={setHandler}/>
                </NavLink>
            </div>

        </div>
    )
}