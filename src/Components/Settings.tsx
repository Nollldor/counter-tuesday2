import React, {FC, useEffect, useState} from "react";
import {InputNumber} from "./InputNumber";
import {Button} from "./Button";

type SettingsPropsType = {
    start: number
    end: number
    changeStart: (value: number) => void
    changeEnd: (value: number) => void
    set: () => void
    setWaitSettings: (mode: boolean) => void
    setError: (error: string | null) => void
    error: string | null
}

export const Settings: FC<SettingsPropsType> = ({
                                                    start,
                                                    end,
                                                    set,
                                                    changeStart,
                                                    changeEnd,
                                                    setWaitSettings,
                                                    setError,
                                                    error,
                                                    ...props
                                                }) => {

    const onChangeStart = (value: string) => {
        changeStart(JSON.parse(value))
        if (JSON.parse(value) >= 0 && JSON.parse(value) < end) {
            setWaitSettings(true)
            setError(null)
        } else {
            setError("wrong start")
        }
    }

    const onChangeEnd = (value: string) => {
        changeEnd(JSON.parse(value))

        if (JSON.parse(value) > start) {
            setWaitSettings(true)
            setError(null)
        } else {
            setError("wrong end")
        }

    }

    const setHandler = () => {
        set()
        setWaitSettings(false)
    }


    return (
        <div>
            <InputNumber value={start} onChange={onChangeStart}/>
            <InputNumber value={end} onChange={onChangeEnd}/>
            <Button title={"set"} disabled={error !== null} onClick={setHandler}/>
        </div>
    )
}