import React, {FC, useState} from "react";
import {Button} from "./Button";

type CounterPropsType = {
    start: number
    end: number
    count: number
    waitSettings: boolean
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
                                                  waitSettings,
                                                  error,
                                                  ...props
                                              }) => {

    const displayValue = waitSettings ? "enter values end press set"
        : count
    return (
        <div className="">
            <h1>{error || displayValue}</h1>
            <Button title={"inc"} disabled={count === end || waitSettings || error !== null} onClick={inc}/>
            <Button title={"reset"} disabled={count === start || waitSettings || error !== null} onClick={reset}/>
        </div>
    )
}