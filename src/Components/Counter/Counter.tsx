import React, {FC, useState} from "react";
import {Button} from "../Button/Button";
import styles from './Counter.module.css'
import {Path} from "../../App";
import {NavLink} from "react-router-dom";

type CounterPropsType = {
    start: number
    end: number
    count: number
    inc: () => void
    reset: () => void
    error: string | null
}

export const Counter: FC<CounterPropsType> = ({
                                                  start,
                                                  end,
                                                  count,
                                                  inc,
                                                  reset,
                                                  error,
                                                  ...props
                                              }) => {

    const displayValue = count
    return (
        <div className={styles.counter}>
            <div className={styles.display}>
                <div className={styles.displayTitle}>{error || displayValue}</div>
            </div>
            <div className={styles.buttons}>
                <Button title={"inc"} disabled={count === end || error !== null} onClick={inc}/>
                <Button title={"reset"} disabled={count === start || error !== null} onClick={reset}/>
                <NavLink to={Path.settings}>
                    <Button title={"set"} onClick={() => {}}/>
                </NavLink>
            </div>
        </div>
    )
}